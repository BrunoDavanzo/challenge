import './index.css';
import React, { Component } from 'react';

export default class Adicionar extends Component {
    
    render() {
       
        return (
            <div>
                <form className="form">
                    <h2>Cadastro de Clientes</h2>
                    <select className="form-select form-select-sm">
                        <option defaultValue>Tipo de Cliente</option>
                        <option value="1">Pessoa Juridica</option>
                        <option value="2">Pessoa Fisica</option>
                    </select>
                    <div className="radioButton">               
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Ativo
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Inativo
                                </label>
                        </div>
                    </div> 

                <section>
                    <div className="Nome">
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Nome do Cliente </label>
                            <label htmlFor="Name" className="form-label">Nome Fantasia </label>
                            <input type="text" className="form-control" id="Nome"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Sobrenome do Cliente </label>
                            <label htmlFor="Name" className="form-label">Razão Social </label>
                            <input type="text" className="form-control" id="Sobrenome"></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">CNPJ </label>
                        <label htmlFor="Name" className="form-label">CPF </label>
                        <input type="text" className="form-control" id="cnpj"></input>
                    </div>
                    <div className="contato">
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email </label>
                            <input type="Email" className="form-control" id="Email"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Telefone </label>
                            <input type="text" className="form-control" id="Telefone"></input>
                        </div>
                    </div>
                    <div className="endereco">
                        <div className="mb-3">
                            <label htmlFor="rua" className="form-label">Rua </label>
                            <input type="text" className="form-control" id="Rua"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numero" className="form-label">Numero </label>
                            <input type="text" className="form-control" id="Numero"></input>
                        </div>
                    </div>
                    <div className="regiao">
                        <div className="mb-3">
                            <label htmlFor="cep" className="form-label">CEP </label>
                            <input type="text" className="form-control" id="cep"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cidade" className="form-label">Cidade </label>
                            <input type="text" className="form-control" id="Cidade"></input>
                        </div>
                    </div>
                        <div>
                            <select className="form-select form-select-sm">
                                <option defaultValue>Estado</option>
                                <option value="1">Acre</option>
                                <option value="2">Alagoas</option>
                                <option value="3">Amapá</option>
                                <option value="4">Amazonas</option>
                                <option value="5">Bahia</option>
                                <option value="6">Ceará</option>
                                <option value="7">Espírito Santo</option>
                                <option value="8">Goiás</option>
                                <option value="9">Maranhão</option>
                                <option value="10">Mato Grosso</option>
                                <option value="11">Mato Grosso do Sul</option>
                                <option value="12">Minas Gerais</option>
                                <option value="13">Pará</option>
                                <option value="14">Paraíba</option>
                                <option value="15">Paraná</option>
                                <option value="16">Pernambuco</option>
                                <option value="17">Piauí</option>
                                <option value="18">Rio de Janeiro</option>
                                <option value="19">Rio Grande do Norte</option>
                                <option value="20">Rio Grande do Sul</option>
                                <option value="21">Rondônia</option>
                                <option value="22">Roraima</option>
                                <option value="23">Santa Catarina</option>
                                <option value="24">São Paulo</option>
                                <option value="25">Sergipe</option>
                                <option value="26">Tocantins</option>
                            </select>
                        </div>
                </section>

                <div className="mb-3 mt-3">
                    <label htmlFor="cidade" className="form-label">Hora do Atendimento: </label>
                 </div>
                 
                     <p>Veículos Utilizados</p>
                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault"> Carro </label>
                 </div>
                 <div className="form-check">   
                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Moto</label>
                     </div>
                     <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Caminhão</label>
                </div>
                </form>
            </div>
        



                    );
    }
}

