import React from 'react';
import { Route, Routes } from "react-router-dom";

import CadaCliente from './views/cliente/CadaCliente';
import PerfilCliente from './views/cliente/PerfilCliente';

import CadaFornecedor from './views/fornecedor/CadaFornecedor';
import PerfilFornecedor from './views/fornecedor/PerfilFornecedor';

import Home from './views/home/Home';
import LogUsuarios from './views/home/LogUsuarios';
import CategoriasPesquisa from './views/servicos/CategoriasPesquisa';

import NovoServico from './views/servicos/NovoServico';
import Servicos from './views/servicos/Servicos';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CategoriasPesquisa" element={<CategoriasPesquisa />} />

                <Route path="/CadaCliente" element={<CadaCliente />} />
                <Route path="/PerfilCliente" element={<PerfilCliente />} />

                <Route path="/CadaFornecedor" element={<CadaFornecedor />} />
                <Route path="/PerfilFornecedor" element={<PerfilFornecedor />} />

                <Route path="/LogUsuarios" element={<LogUsuarios />} />
                <Route path="/Servicos" element={<Servicos />} />
                <Route path="/NovoServico" element={<NovoServico />} />


            </Routes>
        </>
    )
}

export default Rotas
