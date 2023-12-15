import axios from "axios";
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useLocation } from 'react-router-dom';
import { Button, Card, Form, Header, Icon, Image, Modal, Segment, TextArea } from 'semantic-ui-react';

export default function NovoServico() {
  useEffect(() => {
    carregarLista();
  }, [])

  function carregarLista() {

    axios.get("http://localhost:808/api/produto")
      .then((response) => {
        setLista(response.data)
      })
  }
  axios.get("http://localhost:8082/api/categoria-produto")
    .then((response) => {
      const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
      setListaCategoria(dropDownCategorias);
    })

  // metodos post dq pra baixo
  const { state } = useLocation();
  const [idProduto, setIdProduto] = useState();
  const [titulo, setTitulo] = useState();
  const [codigo, setCodigo] = useState();
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState();
  const [imagem, setImagem] = useState();

  const [listaCategoria, setListaCategoria] = useState([]);
  const [idCategoria, setIdCategoria] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get("http://localhost:8082/api/produto/" + state.id)
        .then((response) => {
          setIdProduto(response.data.id)
          setTitulo(response.data.titulo)
          setCodigo(response.data.codigo)
          setDescricao(response.data.descricao)
          setValor(response.data.valor)
          setImagem(response.data.imagem)
          setIdCategoria(response.data.categoria.id)
        })
    }
  }, [state])



  function salvar() {
    let produtoRequest = {
      idCategoria: idCategoria,
      titulo: titulo,
      codigo: codigo,
      valor: valor,
      descricao: descricao,
      idCategoria: idCategoria,
      imagem: imagem


    }
    if (idProduto != null) { //Alteração:
      axios.put("http://localhost:8082/api/produto/" + idProduto, produtoRequest)

        .then((response) => { console.log('produto alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um produto.') })

    } else { //Cadastro:
      axios.post("http://localhost:8082/api/produto", produtoRequest)

        .then((response) => {
          console.log('produto cadastrado com sucesso.')

          let formData = new FormData();
          formData.append('imagem', imagem);
          axios.put('http://localhost:8082/api/produto/cadastrarImagem/' + Response.data.id, formData)
        })

        .catch((error) => { console.log('Erro ao incluir o produto.') })
    }
  }
  //botar dentro do axios




  const [op, setOp] = React.useState(false)
  const [op1, setOp1] = React.useState(false)
  const [op2, setOp2] = React.useState(false)

  const HandleClick = () => {
    console.log('Clicado')
  };



  return (

    <html className='novo_servico' >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h1 >Meus Serviços</h1>
        <h2 align='center' style={{ width: '20em', height: '10em' }}>Em cada Serviço, Tecemos juntos a história o sucesso.
          Na Meraki, cada detalhe importa, pois somos artesãos do êxito, construindo juntos o caminho para o triunfo.</h2>
      </div>
      <body className='Body_novoServico' >


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
            <Form className='Form_Servico'>
              <h1>Meu serviço</h1>
              <Form.Group Widths='equal'

                style={{
                  marginLeft: '1.2em',
                  marginRight: '-1em',
                  textAlign: 'center'
                }}>


                <input
                  type="file"
                  name="file"
                  value={imagem}
                  onChange={e => setImagem(e.target.value)}
                />

              </Form.Group >
              <Form.Group >


                <Form.Input

                  fluid
                  label="codigo"
                  width={5}
                  placeholder='Qual o codigo?'
                  value={codigo}
                  onChange={e => setCodigo(e.target.value)}
                />
                <Form.Select
                  required
                  fluid
                  tabIndex='3'
                  placeholder='Selecione'
                  label='Categoria'
                  options={listaCategoria}
                  value={idCategoria}
                  onChange={(e, { value }) => {
                    setIdCategoria(value)
                  }}
                />

                <Form.Input
                  fluid
                  label="titulo"
                  width={5}
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                  placeholder='Qual a Decoração do serviço?'
                />

                <Form.Input
                  fluid
                  label="valor"
                  width={5}
                  value={valor}
                  onChange={e => setValor(e.target.value)}
                  placeholder='Qual o Valor do serviço?'
                >

                </Form.Input>

              </Form.Group>

              <Form.Group>
                <TextArea
                  style={{ height: '25em' }}
                  placeholder='Descrição de serviço'
                  value={descricao}
                  onChange={e => setDescricao(e.target.value)} />
              </Form.Group>

              <Button onClick={() => salvar()}>
                Adicionar
              </Button>

            </Form>

          </Segment>


        </Modal>


        <div
          style={{
            display: 'flex',
            marginTop: '2em'
          }}>
          <Card.Group >
            <Card>
              <Image
                floated='right'
                style={{ width: '19em', height: '20em' }}
                src=''
              />

              <Card.Content>

                <Card.Header></Card.Header>
                <hr />
                <Card.Meta>
                  <p style={{ FontSize: 'x-larg' }}>
                    Codigo:</p>
                </Card.Meta>
                <Card.Description>

                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Modal style={{

                  width: '50%',

                  marginleft: '2em'

                }}

                  open={op1}
                  onClose={() => setOp1(false)}
                  onOpen={() => setOp1(true)}

                  size='small'
                  trigger={<Button color='blue'>Editar</Button>}
                >


                  <Segment >
                    <Form className='Form_Servico' enctype="multipart/form-data">
                      <h1>Meu serviço</h1>
                      <Form.Group Widths='equal'
                        style={{

                          marginTop: '1%',
                          marginLeft: '2em',
                          marginRight: '1em',
                          textAlign: 'center'
                        }}>


                        <input
                          type="file"
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

                          placeholder='Qual o codigo?'
                        />

                        <Form.Input
                          fluid
                          label="Titulo"
                          width={5}

                          options={titulo}
                          placeholder='Qual a Decoração do serviço?'
                        />

                        <Form.Input
                          fluid
                          label="valor"
                          width={5}

                          placeholder='Qual o Valor do serviço?'
                        >
                          <InputMask
                            mask="R$ 999999999"

                          />
                        </Form.Input>

                      </Form.Group>

                      <Form.Group>
                        <TextArea
                          placeholder='Descrição de serviço' />
                      </Form.Group>

                      <Button >
                        Adicionar Serviço
                      </Button>

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
                    <h3>
                      Deseja mesmo excluir este serviço?
                    </h3>
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
      </body>
    </html>




  )
}