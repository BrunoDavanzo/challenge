import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Adicionar from './Adicionar';
import Editar from './Editar';
import Lista from './Lista';
import Visualizar from './Visualizar';

export default class navBar extends Component {
    render() {
        return (
          <Router>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Menu</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={'/Adicionar'}>Adicionar Clientes</Nav.Link>
      <Nav.Link as={Link} to={'/Lista'}>Lista de Clientes</Nav.Link>
      <Nav.Link as={Link} to={'/Visualizar'}>Visualizar Clientes</Nav.Link>
      <Nav.Link as={Link} to={'/Editar'}>Editar Clientes</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
<div>
<Switch>
          <Route path="/Adicionar">
            <Adicionar />
          </Route>
          <Route path="/Lista">
            <Lista />
          </Route>
          <Route path="/Visualizar">
            <Visualizar />
          </Route>
          <Route path="/Editar">
            <Editar />
          </Route>
        </Switch>
      </div>
</div>
</Router>
        );
    }
}