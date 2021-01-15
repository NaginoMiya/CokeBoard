import logo from './logo.svg';
import './App.css';
import SignIn from './LandingPage/Components/SignIn';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>CokeBoard!!!!!!</strong>🥤
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
      <body>
        <SignIn />
      </body>
    </div>
  );
}

export default App;
