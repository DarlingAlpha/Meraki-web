import React, { useState } from 'react';
import { Card, Dropdown, Icon, Image, Menu, Rating } from "semantic-ui-react";
import logo from '../../LogoM.png';


export default function CategoriasPesquisa() {
    const [Categorias] = useState([
        {
            id: "06",
            key: 'Buffet ',
            text: 'Buffet ',
            value: 'Buffet ',

        },
        {
            id: "06",
            key: 'Ornamentação ',
            text: 'Ornamentação ',
            value: 'Ornamentação ',

        }, {
            id: "06",
            key: 'Espaços  ',
            text: 'Espaços  ',
            value: 'Espaços  ',

        }, {
            id: "06",
            key: 'Personalizados  ',
            text: 'Personalizados  ',
            value: 'Personalizados  ',

        }, {
            id: "06",
            key: 'Fotográfos  ',
            text: 'Fotográfos  ',
            value: 'Fotográfos  ',

        }, {
            id: "06",
            key: 'Decoração  ',
            text: 'Decoração  ',
            value: 'Decoração  ',

        }, {
            id: "06",
            key: ' SomEIluminação  ',
            text: ' Som e iluminação  ',
            value: 'Som e iluminação  ',

        }
    ])
    const [Fornecedor] = useState([
        {
            id: "01",
            Foto: "https://www.guiachristianemichelin.com.br/wp-content/uploads/2019/08/26239894_332008323948311_1508441866704553138_n.jpg",
            Fornecedor: "Pedro Heleno da silva barros",
            Apelido: "Pedrinho",
            Email: "PedroH@Gmail.com.br",
            NomeDaEmpresa: "Meraki Celebrações",
            regiao: 'Vista Alegre'

        }, {
            id: "02",
            Foto: "https://img.freepik.com/vetores-premium/simbolo-de-direitos-autorais-quebrado-com-sombra-conceito-de-exclusividade-justica-legal-acesso-restrito-violacao-roubo-propriedade-isolado-em-fundo-cinza-ilustracao-em-vetor-logotipo-moderno-tendencia-estilo-simples_117142-225.jpg?w=740",
            Fornecedor: "Gabriel",
            Apelido: "Biel",
            Email: "Gabel@Gmail.com.br",
            NomeDaEmpresa: "Modelo Meraki",
            regiao: 'Alagoas'

        }, {
            id: "03",
            Foto: "https://img.freepik.com/psd-gratuitas/efeito-de-estilo-de-texto-3d-dourado_1389-1335.jpg?w=996&t=st=1701391499~exp=1701392099~hmac=24ae282e475ddd0ebd241cf83ac5a53e8eb82dee59f9ba93b1638b861678c5d7",
            Fornecedor: "Jose",
            Apelido: "Linda",
            Email: "Linda@Gmail.com.br",
            NomeDaEmpresa: "Linda Festas",
            Regiao: 'Recife'

        }

    ]);
    return (
        <html>

            <Menu className='Menu_perfil'
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <img src={logo} alt="Logo" style={{ width: '70px', height: '70px', marginRight: '84.8%' }}></img>

                <Menu.Item>

                    <a href="/"> <Icon name='home' /></a>

                </Menu.Item>
                <Menu.Item>

                    <a href="/PerfilCliente"><Icon name='user' /></a>

                </Menu.Item>
                <Menu.Item>

                    <a href=""><Icon name='calendar alternate outline' /></a>

                </Menu.Item>
                <Menu.Item>

                    <a href="/"><Icon name='cart arrow down' /></a>

                </Menu.Item>
            </Menu>
            <head style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around' }}>


                <div style={{ marginTop: '7px' }} class="ui secondary menu">
                    <div class="right menu">
                        <div class="item">
                            <div class="ui icon input">
                                <input type="text" placeholder="Search..." /><i aria-hidden="true" class="search icon"></i></div></div><a class="item"></a></div>
                </div>



                <Menu >
                    <Dropdown text='Categorias' multiple icon='filter'>
                        <Dropdown.Menu>
                            <Dropdown.Menu scrolling>
                                {Categorias.map(Categorias => (
                                    <Dropdown.Item
                                        key={Categorias.Regiao} {...Categorias}
                                    />

                                ))}

                            </Dropdown.Menu>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>


            </head>
            <body style={{ justifyContent: 'space-between', marginTop: '6em', marginLeft: '6em' }} >
                {Fornecedor.map(Fornecedor => (
                    <Card>
                        <Image src={Fornecedor.Foto} style={{ width: '21em', height: '15em' }} car />
                        <Card.Content>
                            <Card.Header>{Fornecedor.NomeDaEmpresa}</Card.Header>
                            <Card.Meta>
                                <span className='data'>2023</span>
                            </Card.Meta>
                            <Card.Description>
                                Descrição
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                <Rating icon='star' defaultRating={2} maxRating={5} />
                            </a>
                        </Card.Content>
                    </Card>

                ))}

            </body>
        </html>



    )
}
