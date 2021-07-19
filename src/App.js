import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'antd/dist/antd.css';
import Home from "./components/Home";
import divPage from "./components/DivPage";
import arrayPage from "./components/ArrayPage";
import companyPage from "./components/CompanyPage";
import listPage from "./components/ListPage"
import detailPage from "./components/DetailPage";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/divExample"} className="nav-link">
              Alert Example (Task 1)
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/arrayExample"} className="nav-link">
              Array Example (Task 2)
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/pageExample"} className="nav-link">
              Page Example (Task 3)
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/divExample" component={divPage} />
          <Route path="/arrayExample" component={arrayPage} />
          <Route path="/pageExample" component={companyPage} />
          <Route path="/listExample/:name" component={listPage} />
          <Route path="/detailPage/:name" component={detailPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
