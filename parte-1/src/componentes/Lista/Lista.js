import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Lista extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome fantasia/ Nome do Cliente</th>
              <th scope="col">Razão Social/ Sobrenome do Cliente</th>
              <th scope="col">Tipo de Pessoa</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Pessoa Física</td>
              <td>
                <ButtonGroup className="me-2">
                  <Link className="btn btn-sm btn-primary" to="/Visualizar"><i className="far fa-eye"></i></Link>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <Link className="btn btn-sm btn-success" to="/Editar"><i className="fas fa-pen"></i></Link>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <button className="btn btn-sm btn-danger"><i className="far fa-trash-alt"></i></button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Pessoa Jurídica</td>
              <td>
              <ButtonGroup className="me-2">
                  <Link className="btn btn-sm btn-primary" to="/Visualizar"><i className="far fa-eye"></i></Link>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <Link className="btn btn-sm btn-success" to="/Editar"><i className="fas fa-pen"></i></Link>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <button className="btn btn-sm btn-danger"><i className="far fa-trash-alt"></i></button>
                </ButtonGroup>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default Lista;