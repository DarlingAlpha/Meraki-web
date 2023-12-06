import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Icon, Image, Menu, Modal, TextArea } from 'semantic-ui-react';

export default function PerfilFornecedor() {
  const [open, setOpen] = React.useState(false)
  const HandleClick = () => {
    console.log('Clicado')
  };
  const [Fornecedor] = useState([
    {
      id: "01",
      Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      NomeFornecedor: "Pedro Heleno da silva barros",
      Apelido: "Pedrinho",
      Email: "PedroH@Gmail.com.br",
      NomeDaEmpresa: "Meraki Celebrações",
      regiao: 'vista Alegre'

    }

  ])



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

          <a href="/"><Icon name='camera' /></a>

        </Menu.Item>
        <Menu.Item>

          <a href="/Servicos"><Icon name='server' /></a>

        </Menu.Item>
      </Menu>

      <Header as='h2' class="perfil_Fornecedor" >
        {Fornecedor.map(Fornecedor => (
          <div key={Fornecedor.id} style={{
            display: 'flex',
            alignItems: 'center',
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
            trigger={<button style={{ color: 'blue', backgroundColor: '#FFDEAD', border: 'none', outline: 'none' }} onClick={HandleClick}>
              <Header as='h3'>
                <Icon name='pencil' />
                <Header.Content>
                  Configurações de conta
                  <Header.Subheader>Click aqui para editar</Header.Subheader>
                </Header.Content>
              </Header>
            </button>}>


            <Form widths='2em' class="perfil_Cliente"><h2 align="center" class="titulo_cadastro"> Meus Dados</h2>

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
                    maskChar={null}
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
                    marginRight: '1em',
                    textAlign: 'center'

                  }}
                  width={15}
                  label='Email'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
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
                    maskChar={null}
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
                    maskChar={null}

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
                    marginRight: '0.5em',
                    textAlign: 'center'

                  }}
                  width={15}
                  label='Região'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
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
                <Form.Input
                  width={16}
                  label='Nome Da Empresa'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
                    placeholder={Fornecedor.NomeDaEmpresa}

                  />

                </Form.Input>
                <Form.Input style={{ height: '5em' }}>
                  <TextArea
                    style={{ width: '15em' }}
                    placeholder='Minha descrição - Ex: Eu (Seu nome), gosto de festas e adoro organizalas, terei uma boa comunicação com meu fornecedor para mostrar oque nessecito' />
                </Form.Input>
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
              <Icon name='arrow up' />
              <Link to={'/PerfilFornecedor'}><p> Confirmar</p></Link>
            </Button>


          </Modal>





        </div>
        <body style={{
          width: '100%',
          backgroundColor: '#BDB76B',
          alignItems: 'center',

        }}>
          {Fornecedor.map(Fornecedor => (


            <div style={{}}>
              <Form widths='2em' ><h2 align="center" class="titulo_cadastro"> Meus dados</h2>

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
                      maskChar={null}
                      placeholder={Fornecedor.NomeFornecedor}
                      readOnly
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

                      marginTop: '1%',
                      marginLeft: '2%',
                      width: '30em'

                    }}
                    width={15}
                    label='Apelido'
                    className="for_for"
                  >
                    <InputMask
                      maskChar={null}
                      placeholder={Fornecedor.Apelido}
                      readOnly
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
                      width: '30em'

                    }}
                    width={15}
                    label='Email'
                    className="for_for"
                  >
                    <InputMask
                      maskChar={null}
                      placeholder={Fornecedor.Email}
                      readOnly
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
                      width: '30em'

                    }}
                    className="for_for"
                    label='Telefone'
                    width={15}

                  >
                    <InputMask

                      mask="(99) 9999.9999"
                      maskChar={null}
                      readOnly
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
                      width: '30em'

                    }}
                    width={15}
                    label='Região'
                    className="for_for"
                  >
                    <InputMask
                      maskChar={null}
                      placeholder={Fornecedor.regiao}
                      readOnly
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
                      width: '30em'

                    }}
                    width={15}
                    label='Nome Da Empresa'
                    className="for_for"
                  >
                    <InputMask
                      maskChar={null}
                      placeholder={Fornecedor.NomeDaEmpresa}
                      readOnly
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
                  <TextArea
                    readOnly
                    placeholder='Minha descrição - Ex: Na (Nome de sua empresa), estamos comprometidos em oferecer um serviço de alta qualidade que atendam ás suas necessidades e superem suas expectativas. ' />
                </Form.Group>

              </Form>
            </div>
          ))}

        </body>
      </Header >
    </html>

  )
}