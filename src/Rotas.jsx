import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import Perfil from './views/home/Perfil';

import FormFornecedor from './views/fornecedor/FormFornecedor';

import Home from './views/home/Home';
import LogUsuarios from './views/home/LogUsuarios';
import PesquisaServicos from './views/servicos/PesquisaServicos';

import NovoServico from './views/servicos/NovoServico';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PesquisaServicos" element={<PesquisaServicos />} />

                <Route path="/FormCliente" element={<FormCliente />} />
                <Route path="/Perfil" element={<Perfil />} />

                <Route path="/FormFornecedor" element={<FormFornecedor />} />

                <Route path="/LogUsuarios" element={<LogUsuarios />} />
                <Route path="/NovoServico" element={<NovoServico />} />


            </Routes>
        </>
    )
}

export default Rotas
