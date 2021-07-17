import './index.css';
import React, { Component } from 'react';

export default class Adicionar extends Component {

    render() {
        return (
            <div>
                <form className="form">
                    <h2>Formulario</h2>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Tipo de Cliente</option>
                    <option value="1">Pessoa Juridica</option>
                    <option value="2">Pessoa Fisica</option>
                </select>
                <div className="">               
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Ativo
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Inativo
                            </label>
                    </div>
                </div> 

                <form>
                    <div class="mb-3">
                        <label for="Name" class="form-label">Nome do Cliente </label>
                        <label for="Name" class="form-label">Nome Fantasia </label>
                        <input type="text" class="form-control" id="Nome"></input>
                    </div>
                    <div class="mb-3">
                        <label for="Name" class="form-label">Sobrenome do Cliente </label>
                        <label for="Name" class="form-label">Razão Social </label>
                        <input type="text" class="form-control" id="Sobrenome"></input>
                    </div>
                    <div class="mb-3">
                        <label for="Name" class="form-label">CNPJ </label>
                        <label for="Name" class="form-label">CPF </label>
                        <input type="text" class="form-control" id="cnpj"></input>
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">Email </label>
                        <input type="Email" class="form-control" id="Email"></input>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Telefone </label>
                        <input type="text" class="form-control" id="Telefone"></input>
                    </div>
                    <div class="mb-3">
                        <label for="cep" class="form-label">CEP </label>
                        <input type="text" class="form-control" id="cep"></input>
                    </div>
                    <div class="mb-3">
                        <label for="rua" class="form-label">Rua </label>
                        <input type="text" class="form-control" id="Rua"></input>
                    </div>
                    <div class="mb-3">
                        <label for="numero" class="form-label">Numero </label>
                        <input type="text" class="form-control" id="Numero"></input>
                    </div>
                    <div class="mb-3">
                        <label for="cidade" class="form-label">Cidade </label>
                        <input type="text" class="form-control" id="Cidade"></input>
                    </div>
                </form>
                    <div>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Estado</option>
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
                <div class="mb-3">
                    <label for="cidade" class="form-label">Hora do Atendimento </label>
                 </div>
                 
                     <p>Veículos Utilizados</p>
                 <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault"> Carro </label>
                 </div>
                 <div class="form-check">   
                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">Moto</label>
                     </div>
                     <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">Caminhão</label>
                </div>
                </form>
            </div>
        



                    );
    }
}

