import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Button, Card, Form, Header, Icon, Image, Modal, Segment, TextArea } from 'semantic-ui-react';
export default function NovoServico() {
  
  const [op, setOp] = React.useState(false)
  const [op1, setOp1] = React.useState(false)
  const [op2, setOp2] = React.useState(false)

  const HandleClick = () => {
    console.log('Clicado')
  };
  const codigo = [
    { key: 'Bu', text: 'Buffet', value: 'Buffet' },
    { key: 'De', text: 'Decoração', value: 'Decoracao' }
  ]
  const titulo = [
    { key: 'Co', text: 'Corporativa', value: 'Corporativa' },
    { key: 'In', text: 'Infantil', value: 'Infantil' }

  ]

  // const Regiao = [
  //   { key: 'Ja', text: 'Jaboatão dos Guararapes', value: 'Jaboatao dos Guararapes' },
  //   { key: 'Re', text: 'Recife', value: 'Recife' }

  // ]
  // simulador de Back-End
  const [Produto] = useState([
    {
      codigo: "01",
      Foto: "https://get.pxhere.com/photo/table-celebration-decoration-meal-food-carnival-colorful-dessert-deco-festival-children-party-event-birthday-table-decoration-children's-birthday-invitation-guests-carnival-party-fasnet-shrove-monday-themed-party-partyaritkel-invited-1287302.jpg",
      Titulo: "Buffet",
      Descricao: "Voce vai adorar"

    }, {
      codigo: "01",
      Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      Titulo: "Decoração",
      Descricao: "Descrições"

    }
    , {
      codigo: "01",
      Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      Titulo: "",
      Descricao: "Descrições"

    }

  ])

  const [Fornecedor] = useState([
    {
      id: "01",
      Foto: "https://img.freepik.com/vetores-gratis/logotipo-elegante-dourado-com-moldura_52683-13462.jpg?w=740&t=st=1702319452~exp=1702320052~hmac=23b5c082ae762a3d67f59f71b6d9923e271804dc4c6ae951a86043ac97d9f282",
      Nome: "Gabriel Gomes Lourenço",

    }

  ])



  return (

    <html  className='novo_servico' >
      <div>
      {Fornecedor.map(Fornecedor => (
            <div key={Fornecedor.id}>
              {/* Falta Imagem */}
              <Image circular
                src={Fornecedor.Foto} style={{ width: '30em', height: '30em' }}/>
              

              <h1>
                {Fornecedor.Nome}
              </h1>
              <hr />
            </div>
            
          ))}  
          </div>
 

      <body   style={{
        height:'50em',
        marginTop: '1%',
        textAlign: 'center'


      }}>
         
     
      <Modal style={{
            display: 'flex',
            width: '40em',
            height: '44em',
            marginleft: '2em'

          }}
            open={op}
            onClose={() => setOp(false)}
            onOpen={() => setOp(true)}
            trigger={<button onClick={HandleClick}>
              <Header as='h3'>
                <Header.Content>
                   Quais Seus Serviços?
                  <Header.Subheader>Click Aqui Para Adicinar Serviços</Header.Subheader>
                </Header.Content>
              </Header>
            </button>}>


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
                  

                <input type="file"
                    name="imagem"
                    accept="image/*"
                    onChange={File}
                />
                
                </Form.Group > 
                <Form.Group >


                <Form.Input
                  fluid
                  label="codigo"
                  width={5}
                  options={codigo}
                  className="for_Servicos"
                  placeholder='Qual o codigo?'
                />

                <Form.Input
                  fluid
                  label="titulo"
                  width={5}
                  className="for_Servicos"
                  options={titulo}
                  placeholder='Qual a Decoração do serviço?'
                />

                <Form.Input
                  fluid
                  label="valor"
                  width={5}
                  className="for_Servicos"
                  placeholder='Qual o Valor do serviço?'
                >
             
                </Form.Input>
              
              </Form.Group>

              <Form.Group>
                <TextArea
                style={{height:'25em'}}
                  placeholder='Descrição de serviço' />
              </Form.Group>

              <Button>Adicionar</Button>

            </Form>

          </Segment>


          </Modal>
         
          {Produto.map(Produto => (
            <div 
            style={{
              display:'flex',
              marginTop:'2em'
            }}>
            <Card.Group className='cards_servico' >
              <Card>
                <Image
                  floated='right'
                  style={{ width: '19em', height: '15em' }}
                  src={Produto.Foto}
                  />
                <Card.Content>
                  
                  <Card.Header>{Produto.Titulo}</Card.Header>
                  <Card.Meta><p style={{FontSize:'x-larg'}}>Codigo:</p>{Produto.codigo}</Card.Meta>
                  <Card.Description>
                  {Produto.Descricao}
                  </Card.Description>
                  </Card.Content>
                <Card.Content>
             <Modal style={{
 
            width: '40em',
            height: '44em',
            marginleft: '2em'

          }}
          
            open={op1}
            onClose={() => setOp1(false)}
            onOpen={() => setOp1(true)}
            basic
            inverted
            size='small'
            trigger={<Button color='blue'>Editar</Button>}
            >
        
            
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
                  

                <input type="file"
                    name="imagem"
                    accept="image/*"
                    onChange={File}
                />
                
                </Form.Group > 
                <Form.Group >


                <Form.Select
                  fluid
                  label="codigo"
                  width={5}
                  options={codigo}
                  className="for_Servicos"
                  placeholder='Qual o codigo?'
                />

                <Form.Select
                  fluid
                  label="titulo"
                  width={5}
                  className="for_Servicos"
                  options={titulo}
                  placeholder='Qual a Decoração do serviço?'
                />

                <Form.Input
                  fluid
                  label="valor"
                  width={5}
                  className="for_Servicos"
                  placeholder='Qual o Valor do serviço?'
                >
                <InputMask
                mask="9.999.999"
               
                />
                </Form.Input>
              
              </Form.Group>

              <Form.Group>
                <TextArea
                  placeholder='Descrição de serviço' />
              </Form.Group>

              <Button>Adicionar</Button>

            </Form>

          </Segment>


              </Modal>
              <Modal
      basic
      onClose={() => setOp2(false)}
      onOpen={() => setOp2(true)}
      open={op2}
      size='small'
      trigger={<Button color='red'>Deletar</Button>}
    >
      <Header icon>
        <Icon color='red' name='delete' />
        Deletar Serviço
      </Header>
      <Modal.Content>
        <p>
        Ao confirmar não tera mais volta, deseja mesmo deletar esse serviço?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOp2(false)}>
          <Icon name='remove' /> Não
        </Button>
        <Button color='green' inverted onClick={() => setOp2(false)}>
          <Icon name='checkmark' /> Sim
        </Button>
      </Modal.Actions>
             </Modal>
               
                </Card.Content>
                
              </Card>
            </Card.Group>
            </div>
 ))}
      </body>
    </html>




  )
}