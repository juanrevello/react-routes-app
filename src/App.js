import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            nosotros
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            contacto
          </NavLink>
          </div>
        <hr />
        <Route path="/notoros/:id">
          <User />
        </Route>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
