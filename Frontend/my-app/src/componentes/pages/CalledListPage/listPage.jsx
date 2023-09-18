import "./style.css";
import {Link} from "react-router-dom"
import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import {MdPageview, MdDelete} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidAddToQueue} from 'react-icons/bi'


const CallListPage = () => {
    return (
        <>
        <header className="main-header"> <AiFillHome/> Listar Atendimentos</header>
                <div className="padding-left-right-20">
                    <div className="card">
                        <Link to="/called/add" className="btn btn-dark">
                            <BiSolidAddToQueue/>Adicionar Chamado
                        </Link>
                    </div>
                    <div className="card">
                        <table id="studentsList" className="table-list">
                            <thead>
                            <tr>
                                <th>Código</th>
                                <th>Cliente</th>
                                <th>Assunto</th>
                                <th>Histórico</th>
                                <th>Atendente</th>
                                <th>Cadastrado em</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Carlos</td>
                                    <td>Desenvolvimento</td>
                                    <td>Em procedimento</td>
                                    <td>Matheus Leal</td>
                                    <td>2023/09/18 09:30:20</td>
                                    <td>
                                        <a className="visualizarCalled" href="#"><MdPageview/></a>
                                        <a className="editCalled" href="#"><FaUserEdit/></a>
                                        <a className="removeCalled" href="#"><MdDelete/></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </>
    );
};

export default CallListPage;