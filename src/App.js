import logo from './logo.svg';
import './App.css';

function App() {

  const arr = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
arr.map( ( letter, i ) => { console.log( i, letter ) } );


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
