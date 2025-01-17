import React from "react";
import { renderChoiceIcon } from "../../Functions/functions.js";
import {
  middleCellRow,
  middleCellCol,
  cellsAroundMiddleCell,
} from "../Cells/Cells.js";
import "./Board.css";

const Board = (props) => {
  const { selectedCell, handleCellClick, board } = props;
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell
                ${selectedCell &&
                rowIndex === selectedCell.rowIndex &&
                colIndex === selectedCell.colIndex &&
                "selected"
                }
                  ${rowIndex === middleCellRow &&
                colIndex === middleCellCol &&
                "middleCellBackground"
                }
                    ${cellsAroundMiddleCell.some(
                  ([row, col]) => row === rowIndex && col === colIndex
                ) && "aroundMiddleCellBackground"
                }`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              onContextMenu={(event) =>handleCellClick(rowIndex, colIndex, event)}
            >
              {renderChoiceIcon(
                cell,
                rowIndex,
                colIndex,
                cellsAroundMiddleCell.some(
                  ([row, col]) => row === rowIndex && col === colIndex
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

// <legend className="legend">{props.username}</legend>
