import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Icon, Image, TextArea } from 'semantic-ui-react';

export default function PerfilFornecedor() {
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
        justifyContent: 'flex-end',
        backgroundColor: '#FFDEAD'

      }}>
        <button style={{ color: 'blue', backgroundColor: '#FFDEAD', border: 'none', outline: 'none' }} onClick={HandleClick}>
          <Header as='h3'>
            <Icon name='pencil' />
            <Header.Content>
              Configurações de conta
              <Header.Subheader>Click aqui para editar</Header.Subheader>
            </Header.Content>
          </Header>
        </button>
      </div>
      <body style={{
        width: '100%',
        backgroundColor: '#BDB76B',
        alignItems: 'center',

      }}>
        {Fornecedor.map(Fornecedor => (


          <div style={{ width: '50em', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <Form widths='2em' ><h2 align="center" class="titulo_cadastro"> Perfil Fornecedor</h2>

              <Form.Group width='equal' class="perfil_Fornecedor">
                <Form.Input
                  width={5}
                  label='Nome Completo'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
                    placeholder={Fornecedor.NomeFornecedor}
                    readOnly
                  />

                </Form.Input>


                <Form.Input
                  width={4}
                  label='Apelido'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
                    placeholder={Fornecedor.Apelido}
                    readOnly
                  />

                </Form.Input>
                <Form.Input
                  width={4}
                  label='Email'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
                    placeholder={Fornecedor.Email}
                    readOnly
                  />

                </Form.Input>

                <Form.Input
                  className="for_for"
                  label='Telefone'
                  width={3}

                >
                  <InputMask

                    mask="(99) 9999.9999"
                    maskChar={null}

                  />

                </Form.Input>
              </Form.Group>   <Form.Group>
                <Form.Input
                  width={16}
                  label='Região'
                  className="for_for"
                >
                  <InputMask
                    maskChar={null}
                    placeholder={Fornecedor.regiao}
                    readOnly
                  />

                </Form.Input>
              </Form.Group>   <Form.Group>
                <Form.Input
                  width={16}
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
              <Form.Group>
                <TextArea
                  readOnly
                  placeholder='Minha descrição - Ex: Na (Nome de sua empresa), estamos comprometidos em oferecer um serviço de alta qualidade que atendam ás suas necessidades e superem suas expectativas. ' />
              </Form.Group>

            </Form>
            <Button
              inverted
              type="button"
              circular
              color='olive'
              floated='right'
            >
              <Icon name='check' />
              <Link to={'/CadastroServicos'}>Meus Serviços</Link>
            </Button>
          </div>
        ))
        }





      </body>



    </Header >

  )
}