import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import { FaUserEdit } from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import {AiFillHome} from 'react-icons/ai';
import {BiSolidAddToQueue} from 'react-icons/bi';


class CallListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calledsList: [],
            // isLoading: true,
        }
    };

    //Executa sempre que à página é carregada.
    componentDidMount(){
        this.fetchCalledList();
    }

    onClickRemoveCalled = (codigo) => {
        Swal.fire({
            title: 'Você realmente deseja excluir este chamado?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Salvar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.deleteCalled(codigo);
            } else if (result.isDenied) {
                Swal.fire('\n' +
                    'Cancelada!', '', 'info')
            }
        })
    };

    deleteCalled = (codigo) => {
        this.state({isLoading: true});
        fetch(`http://localhost:8080/calleds/delete/${codigo}`, {
            method: "DELETE",
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            Swal.fire({
                icon: 'success',
                title: 'Excluído com sucesso!',
                text: 'Excluído com sucesso!',
                showConfirmButton: false,
            })
            this.fetchCalledList();
        });
    }  
    
    fetchCalledList = () => {
        // this.state({isLoading: true})
        fetch(`http://localhost:8080/calleds/list`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    calledsList: data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }
    
    render(){
        // if (this.state.isLoading) {
        //     return <Loader/>
        // }

        return (
            <>
            <header className="main-header"> <AiFillHome/> Listar Atendimentos</header>
                    <div className="padding-left-right-20">
                        <div className="card">
                            <Link to="/called/add" className="btn btn-dark">
                                < BiSolidAddToQueue style={{ fontSize: '20px' }}/>Adicionar Chamado
                            </Link>
                        </div>
                        <div className="card">
                            <table id="calledsList" className="table-list">
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
                                    {
                                        this.state.calledsList.map((calleds) => {
                                            return (
                                                <tr key={calleds.id}>
                                                    <td>{calleds.id}</td>
                                                    <td>{calleds.nomeCliente}</td>
                                                    <td>{calleds.assunto}</td>
                                                    <td>{calleds.status}</td>
                                                    <td>{calleds.atendente}</td>
                                                    <td>{calleds.dataHora}</td>
                                                    <td>
                                                        <Link className="action-link" to={`called/edit/${calleds.id}`}><FaUserEdit/></Link>
                                                        <a className="removeCalled action-link"
                                                            onClick={() => {
                                                                this.onClickRemoveCalled(calleds.id);
                                                            }} href="#"><MdDelete/></a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    };
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
            );
    }
}

export default CallListPage;