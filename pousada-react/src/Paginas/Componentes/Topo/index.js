import React from 'react';

import './style.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="topo">

            <nav className="largura-tela topo__container">

                <div className="topo__logo">
                    <Link to="/">Pousada <span>Dev</span></Link>
                </div>

                <div className="topo__links">
                    <a href="index.html#sobre">sobre</a>
                    <a href="index.html#rota">rota</a>
                    <Link to="/quartos">quartos</Link>
                </div>

            </nav>

        </header>
    )
}

export default Header;