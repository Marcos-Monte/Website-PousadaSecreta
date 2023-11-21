import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PaginaInicial from '../Paginas/PaginaInicial';
import PaginaQuartos from '../Paginas/PaginaQuartos';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PaginaInicial />} />
                <Route path="/quartos" element={<PaginaQuartos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;