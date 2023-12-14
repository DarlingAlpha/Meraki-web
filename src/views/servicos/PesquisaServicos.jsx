import React, { useState } from 'react';
import { Button, Card, Dropdown, Grid, Icon, Image, Menu, Modal, Rating } from "semantic-ui-react";


export default function CategoriasPesquisa() {
    const [open, setOpen] = React.useState(false)
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
    // simulador de dados do banco de dado
    const [Cliente] = useState([
        {
            id: "01",
            Foto: "https://upload.wikimedia.org/wikipedia/commons/1/14/Foto-de-Perfil-en-WhatsApp-696x364.jpg",
            Nome: "Mariana Barros do Barro ",
            Email: "Josel@Gmail.com.br",
            Regiao: 'Mato Grosso',
            Telefone: '(81)92322-3131'

        }

    ])
    const [Produto] = useState([
        {
            codigo: "01",
            Foto: "https://get.pxhere.com/photo/table-celebration-decoration-meal-food-carnival-colorful-dessert-deco-festival-children-party-event-birthday-table-decoration-children's-birthday-invitation-guests-carnival-party-fasnet-shrove-monday-themed-party-partyaritkel-invited-1287302.jpg",
            Titulo: "Buffet",
            Descricao: "Voce vai adorar",
            valor: "R$ 5.000"

        }, {
            codigo: "02",
            Foto: "https://get.pxhere.com/photo/sweet-meal-food-carnival-color-colorful-cupcake-baking-dessert-delicious-cake-brand-pastries-face-children-icing-party-funny-candy-canape-faces-clowns-sweetness-treat-confectionery-delicacy-small-cakes-hand-made-sweets-children's-birthday-americans-carnival-party-fasnet-petit-four-clowngesichter-907612.jpg",
            Titulo: "Decoração",
            Descricao: "Faço produtos lindos para meus Clientes",
            valor: "R$ 5.000"

        }, {
            codigo: "02",
            Foto: "https://get.pxhere.com/photo/sweet-meal-food-carnival-color-colorful-cupcake-baking-dessert-delicious-cake-brand-pastries-face-children-icing-party-funny-candy-canape-faces-clowns-sweetness-treat-confectionery-delicacy-small-cakes-hand-made-sweets-children's-birthday-americans-carnival-party-fasnet-petit-four-clowngesichter-907612.jpg",
            Titulo: "Decoração",
            Descricao: "Faço produtos lindos para meus Clientes",
            valor: "R$ 5.000"

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
            regiao: 'Vista Alegre',
            Telefone: '(81) 92772-2594'

        }, {
            id: "02",
            Foto: "https://img.freepik.com/vetores-premium/simbolo-de-direitos-autorais-quebrado-com-sombra-conceito-de-exclusividade-justica-legal-acesso-restrito-violacao-roubo-propriedade-isolado-em-fundo-cinza-ilustracao-em-vetor-logotipo-moderno-tendencia-estilo-simples_117142-225.jpg?w=740",
            Fornecedor: "Gabriel",
            Apelido: "Biel",
            Email: "Gabel@Gmail.com.br",
            NomeDaEmpresa: "Modelo Meraki",
            regiao: 'Alagoas',
            Telefone: '(81) 9040-4598'

        }, {
            id: "03",
            Foto: "https://img.freepik.com/psd-gratuitas/efeito-de-estilo-de-texto-3d-dourado_1389-1335.jpg?w=996&t=st=1701391499~exp=1701392099~hmac=24ae282e475ddd0ebd241cf83ac5a53e8eb82dee59f9ba93b1638b861678c5d7",
            Fornecedor: "Jose",
            Apelido: "Linda",
            Email: "Linda@Gmail.com.br",
            NomeDaEmpresa: "Linda Festas",
            Regiao: 'Recife', Telefone: '(81) 95562-2553'

        }

    ]);
    return (
        <html className='pesquisa_servicos'>

            <head style={{ display: 'flex', flexDirection: 'row' }}>


                <div style={{ marginTop: '7px', marginRight: "70%" }} class="ui secondary menu">
                    <div class="right menu">
                        <div class="item">
                            <div class="ui icon input">
                                <input type="text" placeholder="Search..." /><i aria-hidden="true" class="search icon"></i></div></div><a class="item"></a></div>
                </div>

                <div style={{ marginleft: "auto" }}>
                    <Menu >
                        <Dropdown text='Região' multiple icon='filter'>
                            <Dropdown.Menu>
                                <Dropdown.Menu scrolling>
                                    {Categorias.map(Categorias => (
                                        <Dropdown.Item
                                            key={Categorias} {...Categorias}
                                        />

                                    ))}

                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>


                    <Menu >
                        <Dropdown text='Categoria' multiple icon='filter'>
                            <Dropdown.Menu>
                                <Dropdown.Menu scrolling>
                                    {Categorias.map(Categorias => (
                                        <Dropdown.Item
                                            key={Categorias} {...Categorias}
                                        />

                                    ))}

                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                </div>

            </head>
            <body style={{ marginTop: '6em', marginLeft: '6em' }} >
                {Fornecedor.map(Fornecedor => (
                    <Card>
                        <Image src={Fornecedor.Foto} style={{ width: '21em', height: '15em' }} car />
                        <Card.Content>
                            <Card.Header>{Fornecedor.NomeDaEmpresa}</Card.Header>
                            <Card.Meta>
                                <span className='data'>2023</span>
                            </Card.Meta>
                            <Card.Description>
                                <h3>Contato:</h3>
                                <a href="https://wa.me/{Fornecedor.Telefone}" target='_blank'>{Fornecedor.Telefone}</a>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='like' />
                                <Rating icon='star' defaultRating={3} maxRating={5} />
                            </a>
                        </Card.Content>


                        <Modal style={{
                            marginleft: '2em'
                        }}

                            open={open}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            basic
                            inverted
                            size='small'
                            trigger={<Button color='blue'>Ver Mais</Button>}
                        >
                            <div className='perfil_ModelServiços'>
                                {Cliente.map(Cliente => (

                                    <div key={Cliente.id} style={{ backgroundColor: '' }}>
                                        {/* Falta Imagem */}
                                        <Image circular
                                            src={Cliente.Foto} style={{ width: '22em', height: '21em' }}>

                                        </Image>
                                        {/* Nome do fornecedor */}
                                        <div  >
                                            {Cliente.Nome}
                                        </div>
                                    </div>
                                ))
                                }

                                <hr />
                                <div className='div_perfil' style={{
                                   
                                }}>

                                    {Cliente.map(Cliente => (
                                        <div>
                                            <h1 align="center" > Meus dados</h1>
                                            <h2>{Cliente.Nome}</h2>
                                            <hr style={{ marginTop: '-1.2em' }} />
                                            <h3>Email :</h3><p>{Cliente.Email}</p>

                                            <h3>Região :</h3><p>{Cliente.Regiao}</p>

                                            <h3  >Telefone para contato :</h3>
                                            <a  href="https://wa.me/{Fornecedor.Telefone}" target='_blank'>{Fornecedor.Telefone}</a>
                                     
                                        </div>

                                    ))
                                    }
                                </div>





                            </div>
                            {
                                Produto.map(Produto => (

                                    <Grid >
                                        <div className='grid_modalServicos'>
                                            <div>
                                                <Grid.Column style={{ marginTop: '2em', width: '30em', height: '30em' }}>
                                                    <Image style={{ width: '40em', height: '29em' }} src={Produto.Foto} />
                                                </Grid.Column>
                                            </div>

                                            <div>
                                                <Grid.Column align="center" >
                                                    <h2>{Produto.Titulo}</h2>
                                                    <hr style={{ marginTop: '-1.4em' }} />

                                                </Grid.Column>


                                                <Grid.Column style={{ marginTop: '4em', marginRight: "4em" }} >
                                                    <h1>Descrição do Serviço </h1>
                                                    <hr style={{ marginTop: '-1.4em' }} />

                                                    <h3>{Produto.Descricao}.</h3>
                                                </Grid.Column>

                                                <Grid.Column style={{ marginTop: '4em', marginRight: "4em" }} >


                                                    <hr style={{ marginTop: '-1.4em' }} />
                                                    <b> Valor :</b>
                                                    <h3>{Produto.valor}.</h3>
                                                </Grid.Column>


                                            </div>
                                        </div>

                                    </Grid>


                                ))
                            }

                        </Modal>
                    </Card>

                ))}

            </body>
        </html >



    )
}