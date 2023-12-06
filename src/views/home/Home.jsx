import React from "react";
import logo from '../../LogoM.png';

export default function Home() {

    return (
        <html>
            <body  >

                <div class="menu-div">

                    <nav class="nav-MenuHome">
                        <ul classe="Menu">
                            <li class="menu-login">
                                <a href="/LogUsuarios">Login</a>
                            </li>
                            <li class="menu-cadastro">
                                <a href="">Cadastrar-se</a>
                                <ul class="subs-Cadastro">
                                    <li>
                                        <a href="/CadaCliente">Cliente</a>
                                    </li>
                                    <li>
                                        <a href="/CadaFornecedor">Fornecedor</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-planejamento">
                                <a href="">Planejamento</a>
                            </li>
                            <li class="menu-regiao">
                                <a href="">Região</a>
                            </li>
                            <li class="menu-categorias">
                                <a href="/CategoriasPesquisa">Categorias</a>
                                <ul class="subs-catego">

                                </ul>
                            </li>
                        </ul>

                    </nav>
                    <img src={logo} alt="Logo" style={{ width: '70px', height: '70px', marginLeft: '1px' }} />
                </div>
                <div class="div-meiosite">
                    <p >De aniversários a casamentos, reuniões familiares a festas temáticas,
                        o Meraki é o seu destino perfeito para planejar e organizar o evento dos seus sonhos.
                        Nós tornamos o processo de planejamento de festas mais fácil, mais inspirador e mais divertido!</p>
                </div>

            </body>


        </html>
    )
}
