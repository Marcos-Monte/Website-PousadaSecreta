import React from 'react';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';

export default function PaginaQuartos() {
    return (
        <div className="quartos">
            <Header />
            <p>Quartos</p>
            <Footer />
        </div>
    )
}