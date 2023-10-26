import React from 'react';
import { Route, Routes } from "react-router-dom";

import CadaCliente from './views/cliente/CadaCliente';
import CadaFornecedor from './views/fornecedor/CadaFornecedor';
import Home from './views/home/Home';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/CadaCliente" element={ <CadaCliente/> } />
                <Route path="/CadaFornecedor" element={ <CadaFornecedor/> } />
            </Routes>
        </>
    )
}

export default Rotas
