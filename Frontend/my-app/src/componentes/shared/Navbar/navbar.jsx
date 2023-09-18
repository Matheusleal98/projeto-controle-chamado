import "./style.css";
import {Link} from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <header>
                Controle de Chamados
            </header>
            <ul className="nav-links">
                <Link to="/" className="nav-item">
                    <li>Atendimentos</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;