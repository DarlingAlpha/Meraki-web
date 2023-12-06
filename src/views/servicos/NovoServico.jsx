import React, { useState } from 'react';
import { Button, Form, Header, Image, Segment, TextArea } from 'semantic-ui-react';
export default function NovoServico() {
  const Categorias = [
    { key: 'Bu', text: 'Buffet', value: 'Buffet' },
    { key: 'De', text: 'Decoração', value: 'Decoracao' }
  ]
  const Decoracao = [
    { key: 'Co', text: 'Corporativa', value: 'Corporativa' },
    { key: 'In', text: 'Infantil', value: 'Infantil' }

  ]
  const Regiao = [
    { key: 'Ja', text: 'Jaboatão dos Guararapes', value: 'Jaboatao dos Guararapes' },
    { key: 'Re', text: 'Recife', value: 'Recife' }

  ]
  const [Fornecedor] = useState([
    {
      id: "01",
      Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      NomeFornecedor: "Gabriel Gomes Lourenço",

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
      <body>
        <Header as='h1' >
          {Fornecedor.map(Fornecedor => (
            <div key={Fornecedor.id} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Falta Imagem */}
              <Image circular
                src={Fornecedor.Foto} style={{ width: '60px', height: '60px' }}>

              </Image>
              {/* Nome do fornecedor */}
              <div >
                {Fornecedor.NomeFornecedor} <p> Meus Serviços</p>
              </div>
            </div>
          ))}

          <Segment >
            <Form className='Color-gre'>
              <h1>Serviço 01</h1>
              <Form.Group Widths='equal'
                style={{

                  marginTop: '1%',
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'
                }}>


                <Form.Select
                  fluid
                  label="codigo"
                  width={5}
                  options={Categorias}
                  className="for_Servicos"
                  placeholder='Qual a categoria do serviço?'
                />

                <Form.Select
                  fluid
                  label="titulo"
                  width={5}
                  className="for_Servicos"
                  options={Decoracao}
                  placeholder='Qual a Decoração do serviço?'
                />

              </Form.Group>

              <Form.Group>
                <TextArea
                  placeholder='Descrição de serviço' />
              </Form.Group>

              <Button>Adicionar</Button>

            </Form>

          </Segment>






        </Header>
      </body>
    </html>




  )
}