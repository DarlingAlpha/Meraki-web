import React from 'react';
import { Route, Routes } from "react-router-dom";

import CadaCliente from './views/cliente/CadaCliente';
import CadaFornecedor from './views/fornecedor/CadaFornecedor';
import Home from './views/home/Home';
import LogUsuarios from './views/home/LogUsuarios';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/CadaCliente" element={ <CadaCliente/> } />
                <Route path="/CadaFornecedor" element={ <CadaFornecedor/> } />
                <Route path="/LogUsuarios" element={ <LogUsuarios/> } />
            </Routes>
        </>
    )
}

export default Rotas
