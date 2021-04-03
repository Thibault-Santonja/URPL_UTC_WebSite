import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useEffect} from 'react';
import {Index} from "./pages/index";
import {Header} from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
/*
    npm install --save bootstrap
    npm install --save reactstrap react react-dom
 */

function App() {
  useEffect(() => {
    document.title = "URPL"
  }, []);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/news" component={Index}/>
          <Route exact path="/polaris" component={Index}/>
          <Route exact path="/team/AOCS" component={Index}/>
          <Route exact path="/team/ASE" component={Index}/>
          <Route exact path="/team/LLT" component={Index}/>
          <Route exact path="/team/MED" component={Index}/>
          <Route exact path="/team/MFDS" component={Index}/>
          <Route exact path="/gallery" component={Index}/>
          <Route exact path="/contact" component={Index}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


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
