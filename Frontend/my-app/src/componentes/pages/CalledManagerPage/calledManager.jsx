import "./style.css";
import React from 'react';
import {Navigate, Link, useParams} from "react-router-dom";

const CalledManager = () => {

    return (
        <>
            <header className="main-header">
                Novo Chamado
            </header>
            <div className="content-page padding-left-right-20">
                <div className="card">
                    <form id="studentForm" className="form" action="" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Nome do cliente:</label>
                            <input required type="text" name="name" id="name"
                                   placeholder="Digite nome do cliente"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="assunto">Assunto do problema:</label>
                            <input required type="email" name="email" id="email"
                                   placeholder="Digite o assunto"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição do problema:</label>
                            <input required type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nome do Atendente:</label>
                            <input required type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status:</label>
                            <select name="status" id="status">
                                <option value="">Selecione o Status</option>
                                <option value="em processo">Em Processo</option>
                                <option value="aberto">Aberto</option>
                                <option value="realizado">realizado</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Data e Hora:</label>
                            <input type="text" readOnly/>
                        </div>
                        <div className="actions">
                            <Link to="/" className="btn btn-warning margin-right-10">Cancelar</Link>
                            <button className="btn btn-dark">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CalledManager;