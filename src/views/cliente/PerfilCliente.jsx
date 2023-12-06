import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Icon, Image, Menu, Modal, TextArea } from 'semantic-ui-react';

export default function PerfilCliente() {
  const [open, setOpen] = React.useState(false)




  // simulador de dados do banco de dado
  const [Fornecedor] = useState([
    {
      id: "01",
      Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      NomeFornecedor: "Mariana Barros do Barro ",
      Apelido: "Jose linda",
      Email: "Josel@Gmail.com.br",
      NomeDaEmpresa: "Meraki Celebrações",
      regiao: 'Mato Grosso'

    }

  ])
  //acaba aque


  return (
    <html
      style={{
        width: '40em',
        marginTop: '1%',
        marginLeft: '30%',
        marginRight: '-1em',
        textAlign: 'center'


      }}>
      <Menu className='Menu_perfil'
        style={{ display: 'flex', justifyContent: 'center' }}>

        <Menu.Item>

          <a href="/"><Icon name='home' /></a>

        </Menu.Item>
        <Menu.Item>

          <a href="/CategoriasPesquisa"><Icon name='calendar alternate outline' /></a>

        </Menu.Item>
        <Menu.Item>

          <a href="/"><Icon name='add to cart' /></a>

        </Menu.Item>
        <Menu.Item>

          <a href="/"><Icon name='cart arrow down' /></a>

        </Menu.Item>
      </Menu>
      <Header as='h2' class="perfil_Fornecedor" >
        {Fornecedor.map(Fornecedor => (
          <div key={Fornecedor.id} style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'


          }}>
            {/* Falta Imagem */}
            <Image circular
              src={Fornecedor.Foto} style={{ width: '8em', height: '8em' }}>

            </Image>
            {/* Nome do fornecedor */}
            <div  >
              {Fornecedor.NomeFornecedor}
            </div>
          </div>
        ))
        }
        <div style={{
          display: 'flex',
          width: '23.8em',
          justifyContent: 'flex-end',
          backgroundColor: '#FFDEAD'

        }}>


          <Modal style={{
            display: 'flex',
            width: '40em',
            height: '44em',
            backgroundColor: '#FFDEAD',
            marginleft: '2em'

          }}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<button style={{ color: 'blue', backgroundColor: '#FFDEAD', border: 'none', outline: 'none' }} >
              <Header as='h3'>
                <Icon name='pencil' />
                <Header.Content>
                  Configurações de conta
                  <Header.Subheader>Click aqui para editar</Header.Subheader>
                </Header.Content>
              </Header>
            </button>}>


            <Form widths='2em' class="perfil_Cliente"><h2 align="center" class="titulo_cadastro"> Meus Dados</h2>

              {/* medoto update nos forms para edição dos dados */}
              <Form.Group width='equal'
                style={{

                  marginTop: '1%',
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'
                }}>

                <Form.Input

                  style={{

                    marginTop: '1%',
                    marginLeft: '2%',
                    width: '30em'

                  }}
                  width={15}
                  label='Nome Completo'
                  className="for_for"

                >
                  <InputMask

                    placeholder={Fornecedor.NomeFornecedor}
                    className=''

                  />

                </Form.Input>
              </Form.Group>

              <Form.Group style={{

                marginTop: '1%',
                marginLeft: '1.2em',
                marginRight: '-1em',
                textAlign: 'center'

              }}>



                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '1.2em',
                    marginRight: '0.2em',
                    textAlign: 'center'

                  }}
                  width={15}
                  label='Email'
                  className="for_for"
                >
                  <InputMask

                    placeholder={Fornecedor.Email}

                  />

                </Form.Input>

              </Form.Group>

              <Form.Group

                style={{

                  marginTop: '1%',
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'

                }}>
                <Form.Input
                  style={{
                    with: '30em',
                    marginTop: '1%',
                    marginLeft: '2%',
                    width: '20em'

                  }}
                  width={15}
                  label='Apelido'
                  className="for_for"
                >

                  <InputMask

                    placeholder={Fornecedor.Apelido}

                  />

                </Form.Input>

              </Form.Group>


              <Form.Group
                style={{

                  marginTop: '1%',
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'

                }}>

                <Form.Input
                  style={{

                    marginTop: '1%',
                    marginLeft: '2%',
                    width: '20em'

                  }}
                  className="for_for"
                  label='Telefone'
                  width={15}

                >
                  <InputMask

                    mask="(99) 9999.9999"


                  />

                </Form.Input>

              </Form.Group>


              <Form.Group
                style={{

                  marginTop: '1%',
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'


                }}>
                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '1.2em',
                    marginRight: '0.2em',
                    textAlign: 'center'

                  }}
                  width={15}
                  label='Região'
                  className="for_for"
                >
                  <InputMask

                    placeholder={Fornecedor.regiao}

                  />

                </Form.Input>
              </Form.Group>
              <Form.Group
                style={{
                  width: '37.4em',
                  marginTop: '1%',
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'


                }}>
                <Form.Input style={{ height: '5em' }}>
                  <TextArea
                    style={{ width: '36em' }}
                    placeholder='Minha descrição - Ex: Eu (Seu nome), gosto de festas e adoro organizalas, terei uma boa comunicação com meu fornecedor para mostrar oque nessecito' />
                </Form.Input >
              </Form.Group>

            </Form>
            <Button style={{
              marginLeft: '-2em',
              marginRight: '16.5em',
              marginTop: '1%'

            }}

              type="button"
              circular
              color='orange'
              floated='right'
            >

              <Link to={'/PerfilCliente'}><p> Confirmar</p></Link>
            </Button>


          </Modal>



        </div>
        <body style={{
          marginTop: '1%',
          marginRight: '-1em',
          textAlign: 'center'


        }}>



          {/* simulador de metodo get  */}
          {Fornecedor.map(Fornecedor => (


            // Esse form é para apenas exibição dos dados n pode ser editavel
            <Form widths='2em'
            >

              <h2 align="center" class="titulo_cadastro"> Meus dados</h2>

              <Form.Group width='equal'

                style={{
                  width: '39em',
                  marginTop: '5%',
                  marginLeft: '1em',
                  textAlign: 'center'

                }}

              >
                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '-1em',
                    marginRight: '-1em',
                    textAlign: 'center'

                  }}
                  width={16}
                  label='Nome Completo'
                  className="for_for"
                >
                  <InputMask

                    placeholder={Fornecedor.NomeFornecedor}
                    readOnly
                  />

                </Form.Input>
              </Form.Group>
              <Form.Group
                style={{
                  width: '39em',
                  marginTop: '5%',
                  marginLeft: '1em',
                  textAlign: 'center'

                }}>

                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '-1em',
                    marginRight: '-1em',
                    textAlign: 'center'

                  }}
                  width={16}
                  label='Apelido'
                  className="for_for"
                >
                  <InputMask

                    placeholder={Fornecedor.Apelido}
                    readOnly
                  />

                </Form.Input>
              </Form.Group>
              <Form.Group
                style={{
                  width: '39em',
                  marginTop: '5%',
                  marginLeft: '1em',
                  textAlign: 'center'

                }}>

                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '-1em',
                    marginRight: '-1em',
                    textAlign: 'center'

                  }}
                  width={16}
                  label='Email'
                  className="for_for"
                >

                  <InputMask

                    placeholder={Fornecedor.Email}
                    readOnly
                  />

                </Form.Input>
              </Form.Group>
              <Form.Group
                style={{
                  width: '39em',
                  marginTop: '5%',
                  marginLeft: '1em',
                  textAlign: 'center'

                }}>

                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '-1em',
                    marginRight: '-1em',
                    textAlign: 'center'

                  }}

                  className="for_for"
                  label='Telefone'
                  width={16}

                >
                  <InputMask

                    mask="(99) 9999.9999"
                    readOnly

                  />

                </Form.Input>
              </Form.Group>   <Form.Group>

              </Form.Group>
              <Form.Group
                style={{
                  width: '39em',
                  marginTop: '5%',
                  marginLeft: '1em',
                  textAlign: 'center'

                }}>

                <Form.Input
                  style={{
                    width: '30em',
                    marginTop: '1%',
                    marginLeft: '-1em',
                    marginRight: '-1em',
                    textAlign: 'center'

                  }}

                  width={16}
                  label='Região'
                  className="for_for"
                >
                  <InputMask

                    placeholder={Fornecedor.regiao}
                    readOnly
                  />

                </Form.Input>
              </Form.Group>
              <Form.Group>
                <TextArea
                  readOnly
                  placeholder='Minha descrição - Ex: Na (Nome de sua empresa), estamos comprometidos em oferecer um serviço de alta qualidade que atendam ás suas necessidades e superem suas expectativas. ' />
              </Form.Group>

            </Form>

          ))
          }





        </body >
      </Header >
    </html>

  )
}