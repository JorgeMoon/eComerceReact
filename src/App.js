import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo2" alt="logo" width="600" height="600" />
        <p>
          Mi primer <code> E-Commerce </code> con React!.
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
