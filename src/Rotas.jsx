import React from 'react';
import { Route, Routes } from "react-router-dom";

import CadaCliente from './views/cliente/CadaCliente';
import PerfilCliente from './views/cliente/PerfilCliente';

import CadaFornecedor from './views/fornecedor/CadaFornecedor';
import PerfilFornecedor from './views/fornecedor/PerfilFornecedor';

import Home from './views/home/Home';
import LogUsuarios from './views/home/LogUsuarios';

import CadastroServicos from './views/servicos/CadastroServicos';
import NovoServico from './views/servicos/NovoServico';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />

                <Route path="/CadaCliente" element={ <CadaCliente/> } />
                <Route path="/PerfilCliente" element={ <PerfilCliente/> } />

                <Route path="/CadaFornecedor" element={ <CadaFornecedor/> } />
                <Route path="/PerfilFornecedor" element={ <PerfilFornecedor/> } />

                <Route path="/LogUsuarios" element={ <LogUsuarios/> } />
                <Route path="/CadastroServicos" element={ <CadastroServicos/> } />
                <Route path="/NovoServico" element={ <NovoServico/> } />
            </Routes>
        </>
    )
}

export default Rotas
