import React, { Component } from 'react';

export default class Visualizacao extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
            currentDateTime: Date().toLocaleString()
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);

    }

    handleDropdownChange(e) {
        this.setState({ selectedValue: e.target.value });
    }

    render() {
        let NomeLabel;
        let SobrenomeLabel;
        let CpfLabel;

        if (this.state.selectedValue === "pj") {
            NomeLabel = <label className="form-label">Nome Fantasia: </label>;
            SobrenomeLabel = <label className="form-label">Razão Social: </label>;
            CpfLabel = <label className="form-label">CNPJ:</label>;
        } else {
            NomeLabel = <label className="form-label">Nome do Cliente: </label>;
            SobrenomeLabel = <label className="form-label">Sobrenome do Cliente: </label>;
            CpfLabel = <label className="form-label">CPF:</label>;
        }

        return (
            <div>
                <form className="form">
                    <h2>Dados do Cliente</h2>

                        <label >Tipo de Cliente:</label>
                        <span> Pessoa Jurídica</span>
                    <div className="radioButton">
                        <div className="form-check">
                            <input className="form-check-input disabled" type="radio" name="flexRadioDefault" id="flexRadioDefault1" disabled />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Ativo</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled checked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Inativo</label>
                        </div>
                    </div>

                    <section>
                        <div className="Nome">
                            <div className="input mb-3">
                                {NomeLabel}
                                <span> Jane</span>
                            </div>
                            <div className="input mb-3">
                                {SobrenomeLabel}
                                <span> Doe</span>
                            </div>
                        </div>
                        <div className="input mb-3">
                            {CpfLabel}
                            <span> 42551223301</span>
                        </div>
                        <div className="contato">
                            <div className="input mb-3">
                                <label htmlFor="Email" className="form-label">Email: </label>
                                <span> junior_silva@gmail.com</span>
                            </div>
                            <div className="input mb-3">
                                <label htmlFor="phone" className="form-label">Telefone: </label>
                                <span> (19)993546211</span>
                            </div>
                        </div>
                        <div className="endereco">
                            <div className="input mb-3">
                                <label htmlFor="rua" className="form-label">Rua: </label>
                                <span> João Pedroso</span>
                            </div>
                            <div className="input mb-3">
                                <label htmlFor="numero" className="form-label">Número: </label>
                                <span> 208</span>
                            </div>
                        </div>
                        <div className="regiao">
                            <div className="input mb-3">
                                <label htmlFor="cep" className="form-label">CEP: </label>
                                <span> 13208523</span>                            </div>
                            <div className="input mb-3">
                                <label htmlFor="cidade" className="form-label">Cidade: </label>
                                <span> Piracicaba</span>
                            </div>
                        </div>
                        <label> Estado: </label>
                        <span>São Paulo</span>

                    </section>

                    <div className="mb-3 mt-3">
                        <label htmlFor="data" className="form-label">Data e Hora do Atendimento: </label>
                        <p>Sat Jul 24 2021 15:25:48 GMT-0300 (Hora padrão de Brasília)</p>
                    </div>

                    <p>Veículos Utilizados</p>
                    <div className="form-check">
                        <ul>
                            <li> Carro </li>
                            <li> Moto </li>
                            <li> Caminhão </li>
                        </ul>
                    </div>
                </form>
            </div>

        );
    }
}