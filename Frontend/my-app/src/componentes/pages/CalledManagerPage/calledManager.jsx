import "./style.css";
import React, { useEffect, useState } from 'react';
// import Loader from "../../shared/Loader";
import {Navigate, Link, useParams} from "react-router-dom";
import Swal from "sweetalert2";

const CalledManager = () => {

    const {id} = useParams();

    const [isRedirect, setIsRedirect] = useState(false);
    const [isLoading, updateIsLoading] = useState(false)
    
    const [nomeCliente, updateNameCliente] = useState("");
    const [assunto, updateAssunto] = useState("");
    const [descricao, updateDescricao] = useState("");
    const [atendente, updateUsuario] = useState("");
    const [status, setStatus] = useState("");

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const fetchCalled = () => {
        updateIsLoading(true);
        fetch(`http://localhost:8080/calleds/find/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                updateNameCliente(data.nomeCliente);
                updateAssunto(data.assunto);
                updateDescricao(data.descricao);
                updateUsuario(data.atendente);
                setStatus(data.status);
                updateIsLoading(false);
            });
    };

    useEffect(() => {
        if (id) {
            fetchCalled();
        }
    }, []);


    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            nomeCliente,
            assunto,
            descricao,
            atendente,
            status
        };

        /* PARAMÊTROS */
        let methodEndpoint;
        let urlEndpoint;

        if (id) {
            methodEndpoint = "PUT";
            urlEndpoint = `http://localhost:8080/calleds/edit/${id}`;

        } else {
            methodEndpoint = "POST";
            urlEndpoint = "http://localhost:8080/calleds/save";
        }

        fetch(urlEndpoint, {
            method: methodEndpoint,
            body: JSON.stringify(body),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        })
        .then ((response) => {
            return response.json();
        })
        .then((data) => {
            if (data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Parabéns!',
                    text: data.assunto,
                    showConfirmButton: false,
                });
                setIsRedirect(true);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Desculpe...',
                    text: data.assunto,
                    showConfirmButton: false,
                });
            }
        });
    };

    if (isRedirect) {
        return <Navigate to="/"/>;
    }

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <header className="main-header">
                Novo Chamado
            </header>
            <div className="content-page padding-left-right-20">
                <div className="card">
                    <form id="calledForm" className="form" action="" method="post"
                        onSubmit={onSubmitForm}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nome do cliente:</label>
                            <input required type="text" name="name" id="name"
                                   value={nomeCliente}
                                   onChange={(event) => {
                                       updateNameCliente(event.target.value);
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="assunto">Assunto do problema:</label>
                            <input required type="text" name="assunto" id="assunto"
                                   value={assunto}
                                   onChange={(event) => {
                                       updateAssunto(event.target.value);
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição do problema:</label>
                            <input required type="text" name="descricao" id="descricao"
                                    value={descricao}
                                    onChange={(event) => {
                                        updateDescricao(event.target.value);
                                    }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nome do Atendente:</label>
                            <input required type="text" name="atendente" id="atendente"
                                    value={atendente}
                                    onChange={(event) => {
                                        updateUsuario(event.target.value);
                                    }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status:</label>
                            <select name="status" id="status" value={status} onChange={handleStatusChange}>
                                <option value="">Selecione o Status</option>
                                <option value="em processo">Em Processo</option>
                                <option value="aberto">Aberto</option>
                                <option value="realizado">realizado</option>
                            </select>
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