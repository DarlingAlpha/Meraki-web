import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Icon, Image, Modal, TextArea } from 'semantic-ui-react';

export default function PerfilCliente() {
  const [open, setOpen] = React.useState(false)




  // simulador de dados do banco de dado
  const [Cliente] = useState([
    {
      id: "01",
      Foto: "https://upload.wikimedia.org/wikipedia/commons/1/14/Foto-de-Perfil-en-WhatsApp-696x364.jpg",
      Nome: "Mariana Barros do Barro ",
      Email: "Josel@Gmail.com.br",
      Regiao: 'Mato Grosso',
      Telefone:'(81)92322-3131'

    }

  ])
  //acaba aque


  return (
    <html
      style={{
    
        marginTop: '1%',
        display:'flex',
        
      }}>
      <Header as='h2'  >
        {Cliente.map(Cliente => (
          <div key={Cliente.id} >
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
        <div style={{
          display: 'flex',
          width: '23.8em',
          justifyContent: 'flex-end',
          backgroundColor: '#FFDEAD'

        }}>


         


        </div>
        </Header >
        <body className='perfil_body'>



          {/* simulador de metodo get  */}
          {Cliente.map(Cliente => (
            <div>
            <h1 align="center" class="titulo_cadastro"> Meus dados</h1>
                <h2>{Cliente.Nome}</h2>
                <hr style={{marginTop:'-1.2em'}} />
                 <h3>Email :</h3><p>{Cliente.Email}</p>
         
                 <h3>Região :</h3><p>{Cliente.Regiao}</p>
            
                 <h3>Telefone para contato :</h3><p>{Cliente.Telefone}</p>
                 
                </div>
          ))
          }
           <Modal style={{
            display: 'flex',
            width: '40em',
            height: '44em',
            backgroundColor: '#FFDEAD',
            marginleft: '2em',
            marginTop:'-2em'

          }}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<button style={{marginTop:'12.4em', color: 'blue', backgroundColor: '#FFDEAD', border: 'none', outline: 'none' }} >
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

                    placeholder={Cliente.NomeFornecedor}
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

                    placeholder={Cliente.Email}
                 
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

                    placeholder={Cliente.Apelido}

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

                    placeholder={Cliente.regiao}

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






        </body >
      
    </html>

  )
}