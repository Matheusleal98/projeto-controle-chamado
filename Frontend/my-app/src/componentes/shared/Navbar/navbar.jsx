import "./style.css";
import {Link} from "react-router-dom";
import React from 'react';
import {BiSolidUserAccount, BiSolidAddToQueue} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';


const Navbar = () => {
    return (
        <nav className="main-nav">
            <header>
                Controle de Chamados
            </header>
            <ul className="nav-links">
                <div className="icon-add">
                    < BiSolidAddToQueue />
                    <Link to="/called/add" className="nav-item">
                        <li>Novo Chamado</li>
                    </Link>
                </div>
            </ul>
            <ul className="nav-links">
                <div className="icon-add">
                    <AiFillHome/>
                    <Link to="/" className="nav-item">
                        <li>Atendimentos</li>
                    </Link>
                </div>
            </ul>
            <ul className="nav-links">
                <div className="icon-add">
                    <BiSolidUserAccount/>
                    <Link to="/called/client" className="nav-item">
                        <li>Cadatrar Cliente</li>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;