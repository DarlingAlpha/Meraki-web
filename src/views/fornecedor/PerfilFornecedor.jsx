import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Icon, Image, TextArea } from 'semantic-ui-react';

export default function PerfilFornecedor() {
  const [Fornecedor] = useState([
    {
      id: "01",
      Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      NomeFornecedor: "Pedro",

    }

  ])


  return (
    <Header as='h2' >
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
        backgroundColor: '#BDB76B'

      }}>
        <Header as='h3'>
          <Icon name='pencil' />
          <Header.Content>
            Configurarções de conta
            <Header.Subheader>Gerenciar sua preferencia</Header.Subheader>
          </Header.Content>
        </Header>
      </div>
      <body>

        <Form>
          {Fornecedor.map(Fornecedor => (
            <Form.Group width='equal'>
              <Form.Input
                style={{ width: '16em' }}
                label='Nome'

              >
                <InputMask
                  maskChar={null}
                  placeholder={Fornecedor.NomeFornecedor}
                />

              </Form.Input>

            </Form.Group>
          ))
          }
          <TextArea placeholder='Minha descrição' />

        </Form>





      </body>
      <Button
        inverted
        type="button"
        circular
        color='olive'
        floated='right'
      >
        <Icon name='check' />
        <Link to={'/CadastroServicos'}>Meus Serviçõs</Link>
      </Button>


    </Header >

  )
}