import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useEffect} from 'react';
import {Index} from "./pages/index";
import {News} from "./pages/news";
import {Polaris} from "./pages/polaris";
import {Gallery} from "./pages/gallery";
import {Contact} from "./pages/contact";
import {AOCS} from "./pages/team/AOCS";
import {ASE} from "./pages/team/ASE";
import {LLT} from "./pages/team/LLT";
import {MED} from "./pages/team/MED";
import {MFDS} from "./pages/team/MFDS";
import {Header} from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './graphicChart.css';
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
          <Route exact path="/news" component={News}/>
          <Route exact path="/polaris" component={Polaris}/>
          <Route exact path="/team/AOCS" component={AOCS}/>
          <Route exact path="/team/ASE" component={ASE}/>
          <Route exact path="/team/LLT" component={LLT}/>
          <Route exact path="/team/MED" component={MED}/>
          <Route exact path="/team/MFDS" component={MFDS}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/contact" component={Contact}/>
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
