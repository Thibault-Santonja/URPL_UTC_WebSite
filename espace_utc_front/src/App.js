import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useEffect} from 'react';
import {Index} from "./pages/index";

function App() {
  useEffect(() => {
    document.title = "URPL"
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
  /*
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
   */
}

export default App;
