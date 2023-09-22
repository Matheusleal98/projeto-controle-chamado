// import { useParams } from "react-router-dom";
import "./style.css"
import React, { useState } from 'react';
import {Navigate, Link} from "react-router-dom";
import Swal from "sweetalert2";

const ClientRegister = () => {

    const [isRedirect, setIsRedirect] = useState(false);
    
    const [nome, updateNome] = useState("");
    const [email, updateEmail] = useState("");
    const [cpf, updateCpf] = useState("");

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            nome,
            email,
            cpf
        };

        /* PARAMÊTROS */
        let methodEndpoint;
        let urlEndpoint;

        methodEndpoint = "POST";
        urlEndpoint = `http://localhost:8080/called/client/save`;

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
            if(data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Parabéns!',
                    text: data.nome,
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
        })
    };

    if (isRedirect) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            <header className="main-header">
                Novo Cliente
            </header>
            <div className="content-page padding-left-right-20">
                <div className="card">
                    <form id="calledForm" className="form" action="" method="post"
                        onSubmit={onSubmitForm}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input required type="text" name="name" id="name"
                                   value={nome}
                                   onChange={(event) => {
                                       updateNome(event.target.value);
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input required type="text" name="email" id="email"
                                   value={email}
                                   onChange={(event) => {
                                       updateEmail(event.target.value);
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label>
                            <input required type="text" name="cpf" id="cpf"
                                    value={cpf}
                                    onChange={(event) => {
                                        updateCpf(event.target.value);
                                    }}
                            />
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

export default ClientRegister;