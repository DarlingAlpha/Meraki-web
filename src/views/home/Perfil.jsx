import axios from "axios";
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Link, useLocation } from 'react-router-dom';
import { Button, Form, Header, Icon, Image, Modal, TextArea } from 'semantic-ui-react';

export default function PerfilCliente() {
  const { state } = useLocation();
  const [idCliente, setIdcliente] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [telefone, setTelefone] = useState();
  const [imagem, setImagem] = useState();

  const [lista, setLista] = useState([]);
  const [open, setOpen] = React.useState(false)
  
  useEffect(() => {
    carregarLista();
  }, [])

  function carregarLista() {

    axios.get("http://localhost:8082/api/cliente")
      .then((response) => {
        setLista(response.data)
      })
  }
  

  useEffect(() => {
      if (state != null && state.id != null) {
          axios.get("http://localhost:8082/api/cliente/" + state.id)
              .then((response) => {
                  setIdcliente(response.data.id)
                  setNome(response.data.nome)
                  setEmail(response.data.email)
                  setSenha(response.data.senha)
                  setTelefone(response.data.telefone)
                  setImagem(response.data.imagem)
              })
      }
  }, [state])

  function salvar() {
      let clienteRequest = {
          nome: nome,
          email: email,
          senha: senha,
          telefone: telefone,
          imagem: imagem

      }
      if (idCliente != null) { //Alteração:
          axios.put("http://localhost:8082/api/cliente/" + idCliente, clienteRequest)

              .then((response) => { console.log('cliente alterado com sucesso.') })
              .catch((error) => { console.log('Erro ao alter um cliente.') })

      } else { //Cadastro:
          axios.post("http://localhost:8082/api/cliente", clienteRequest)

              .then((response) => {
                  console.log('cliente cadastrado com sucesso.')

                  let formData = new FormData();
                  formData.append('imagem', imagem);
                  axios.put('http://localhost:8082/api/fornecedor/cadastrarImagem/' + Response.data.id, formData)

              })

              .catch((error) => { console.log('Erro ao incluir o cliente.') })
      }
    }
  return (
    <html
      style={{
        marginBottom: '11.7%',
        marginTop: '1%',
        display: 'flex'
      }}>
        
    {lista.map(Cliente => (
      <Header as='h2'  >
       
          <div key={Cliente.id} >
            {/* Imagem */}
            <Image circular
              src={Cliente.foto} style={{ width: '22em', height: '21em' }}>

            </Image>
            {/* Nome do fornecedor */}
            <div  >
              {Cliente.Nome}
            </div>
          </div>
      
        <hr />
        <div style={{
          display: 'flex',
          width: '23.8em',
          justifyContent: 'flex-end',
          backgroundColor: '#FFDEAD'
        }}>

        </div>
      </Header >
      ))}
      <body className='perfil_body'>



        {/* metodo get  */}
        {lista.map(Cliente => (
          <div key={Cliente.id}>
            <h1 align="center" class="titulo_cadastro"> Meus dados</h1>
            <h2>{Cliente.Nome}</h2>
            <hr style={{ marginTop: '-1.2em' }} />
            <h3>Email :</h3><p>{Cliente.Email}</p>

            {/* <h3>Região :</h3><p>{Cliente.Regiao}</p> */}

            <h3>Telefone para contato :</h3><p>{Cliente.Telefone}</p>

          </div>
         ))}
       
        <Modal style={{
          display: 'flex',
          width: '40em',
          height: '47em',
          backgroundColor: '#FFDEAD',
          marginleft: '2em',
          marginTop: '-2em'

        }}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={<button style={{ marginTop: '12.4em', color: 'blue', backgroundColor: '#FFDEAD', border: 'none', outline: 'none' }} >
            {lista.map(Cliente => (
            <Header as='h3'>
              <Icon name='pencil' />
              <Header.Content>
                Configurações de conta
                <Header.Subheader state={{id: Cliente.id}} >Click aqui para editar</Header.Subheader>
              </Header.Content>
            </Header> 
             ))}  
          </button>}>


          <Form widths='2em' ><h2 align="center" class="titulo_cadastro"> Meus Dados</h2>

            {/* medoto update nos forms para edição dos dados */}
            <h3 marginLeft='-10em'>Foto de perfil:</h3>
            <Form.Group width='equal'
              style={{
                width: '30em',
                marginTop: '-3%',
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
                required
                width={15}
                label='Nome '
                className="for_for"
                value={nome}
                onChange={e => setNome(e.target.value)}

              >
             

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
                required
                width={15}
                label='Email'
                className="for_for"
                value={email}
                onChange={e => setEmail(e.target.value)}
              >
         

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
  required
  width={15}
  label='Email'
  className="for_for"
  value={senha}
  onChange={e => setSenha(e.target.value)}
>


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
                required
                className="for_for"
                label='Telefone'
                width={15}
                value={telefone}
                onChange={e => setTelefone(e.target.value)}

              >
                <InputMask

                  mask="(99) 9999.9999"


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



  );
}