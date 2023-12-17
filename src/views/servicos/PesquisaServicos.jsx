import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Card, Dropdown, Grid, Icon, Image, Menu, Modal, Rating } from "semantic-ui-react";


export default function CategoriasPesquisa() {
    const [lista, setLista] = useState([]);
    const [menuFiltro, setMenuFiltro] = useState();
    const [idCategoria, setIdCategoria] = useState();
    const [codigo] = useState();
    const [titulo] = useState();
    const [listaCategoriaProduto, setListaCategoriaProduto] = useState([]);
    const [open, setOpen] = React.useState(false)
    
    useEffect(() => {
      carregarLista();
    }, [])
  
    function carregarLista() {
  
      axios.get("http://localhost:8082/api/fornecedor")
        .then((response) => {
          setLista(response.data)
        })

        axios.get("http://localhost:8082/api/categoria-produto")
        .then((response) => {

            const dropDownCategorias = [];
            dropDownCategorias.push({ text: '', value: '' });
            response.data.map(c => (
                dropDownCategorias.push({ text: c.descricao, value: c.id })
            ))

            setListaCategoriaProduto(dropDownCategorias)

        })
    }
    
   
    function handleMenuFiltro() {

        if (menuFiltro === true) {
            setMenuFiltro(false);
        } else {
            setMenuFiltro(true);
        }
    }


    function handleChangeCategoriaProduto(value) {

        filtrarProdutos(codigo, titulo, value);
    }

    async function filtrarProdutos(idCategoriaParam) {

        let formData = new FormData();
       
        if (idCategoriaParam !== undefined) {
            setIdCategoria(idCategoriaParam)
            formData.append('idCategoria', idCategoriaParam);
        }



        await axios.post("http://localhost:8082/api/produto/filtrar", formData)
            .then((response) => {
                setLista(response.data)
            })
    }
    
    axios.get("http://localhost:8082/api/categoria-produto")
    .then((response) => {

        const dropDownCategorias = [];
        dropDownCategorias.push({ text: '', value: '' });
        response.data.map(c => (
            dropDownCategorias.push({ text: c.descricao, value: c.id })
        ))

        setListaCategoriaProduto(dropDownCategorias)

    })

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
                        <Dropdown text='Categoria' multiple icon='filter'>
                            <Dropdown.Menu>
                                <Dropdown.Menu scrolling>
                                
                                        <Dropdown.Item
                                         placeholder='Filtrar por Categoria'
                                         options={listaCategoriaProduto}
                                         value={idCategoria}
                                         onChange={(e, { value }) => {
                                             handleChangeCategoriaProduto(value)
                                         }}/>

                                

                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>


                    <Menu >
                        <Dropdown text='Região' multiple icon='filter'>
                            <Dropdown.Menu>
                                <Dropdown.Menu scrolling>
                                    tem que ver como q vai filtrar regiao, se tiver regiao na api produto acho q fica melhor de fazer

                                    {/* {lista.map(regiao => (
                                        <Dropdown.Item
                                        {regiao.Fornecedores}
                                        />

                                    ))} */}

                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                </div>

            </head>
            
            <body className='Body_servicoslist' style={{ marginTop: '5em' }} >

            {lista.map(Fornecedor => (
                    <Card.Group >
                        <Card>
                            <Image
                                style={{ width: '21em', height: '15em' }}
                                src={Fornecedor.Foto}
                            />
                            <Card.Content>
                                <Card.Header>{Fornecedor.NomeDaEmpresa}</Card.Header>
                                <Card.Meta>
                                    <span className='data'>2023</span>
                                </Card.Meta>
                                <Card.Description>
                                    <h3>Contato:</h3>
                                    <a href="https://wa.me/" target='_blank'>{Fornecedor.Telefone}</a>
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
                                 

                                        <div key={Fornecedor.id} style={{ backgroundColor: '' }}>
                                            {/* Falta Imagem */}
                                            <Image circular
                                                src={Fornecedor.Foto} style={{ width: '22em', height: '21em' }}>

                                            </Image>
                                            {/* Nome do fornecedor */}
                                            <div  >
                                                {Fornecedor.Nome}
                                            </div>
                                        </div>
                                  

                                    <hr />
                                    <div className='div_perfil' style={{

                                    }}>

                                        
                                            <div>
                                                <h1 align="center" > Meus dados</h1>
                                                <h2>{Fornecedor.Nome}</h2>
                                                <hr style={{ marginTop: '-1.2em' }} />
                                                <h3>Email :</h3>
                                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=" target='_blank'>{Fornecedor.Email}</a>

                                                {/* <h3>Região :</h3><p>{Fornecedor.Regiao}</p> */}

                                                <h3  >Telefone para contato :</h3>
                                                <a href="https://wa.me/" target='_blank'>{Fornecedor.Telefone}</a>
                                            </div>

                                       
                                    </div>





                                </div>
                              
                                {lista.map(Produto => (
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
                                        ))}


                          

                            </Modal>
                        </Card>
                    </Card.Group>
 ))}
              

            </body>
               
        </html >



    )
}