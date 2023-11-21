import React from 'react';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';

export default function PaginaInicial() {
    return (
        <div className="inicial">
            <Header />
            <p>Inicial</p>
            <Footer />
        </div>

    )
}