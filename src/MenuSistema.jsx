import React from 'react';
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import logo from './LogoM.png';


export default function CategoriasPesquisa() {

    return (
        <Menu className='Menu_perfil'
        >
            <div>
                <img src={logo} alt="Logo" style={{ width: '70px', height: '69px' }}></img>
            </div>
            <Menu.Item >
                <Dropdown text='Cadastre-se' icon='id card outline' floating labeled button className='icon' >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='user' text='Cliente' as='a' href='/FormCliente' />
                        <Dropdown.Item icon='user' text='Fornecedor' as='a' href='/FormFornecedor' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>



            <Menu.Item style={{ marginLeft: 'auto' }}>

                <a href="PesquisaServicos"><Icon color='orange' name='calendar alternate outline' />
                    <p>Lista de Servicos</p></a>

            </Menu.Item>
            <Menu.Item>

                <a href="NovoServico"><Icon color='green' name='leaf' />
                    <p>Cadastrar Servico</p></a>

            </Menu.Item>

            <Menu.Item>

                <a href="/Perfil"><Icon color='blue' name='user' />
                    <p>Perfil</p></a>

            </Menu.Item>

            <Menu.Item >

                <a href="/"> <Icon color='cinder' name='home' />
                    <p>home</p></a>

            </Menu.Item>
            <Menu.Item >

                <a href="/LogUsuarios"><Icon color='purple' name='sign in' />
                    <p>Login</p></a>

            </Menu.Item>
        </Menu>

    )
}