import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Button, Form, Header, Image, Segment, TextArea } from 'semantic-ui-react';
export default function  NovoServico() {
    const Categorias =[
        {key: 'Bu',text: 'Buffet',value:'Buffet'},
        {key: 'De',text: 'Decoração',value:'Decoracao'}
    ]
    const Decoracao =[
        {key: 'Co',text: 'Corporativa',value:'Corporativa'},
        {key: 'In',text: 'Infantil',value:'Infantil'}
        
    ]
    const Regiao =[
        {key: 'Ja',text: 'Jaboatão dos Guararapes',value:'Jaboatao dos Guararapes'},
        {key: 'Re',text: 'Recife',value:'Recife'}
        
    ]
    const [Fornecedor] = useState([
        {
          id: "01",
          Foto: "https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
          NomeFornecedor: "Gabriel Gomes Lourenço",
    
        }
    
      ])



return(


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
        <Form  className='Color-gre'>
            <h1>Serviço 01</h1>
            <Form.Group Widths='equal' >

              <Form.Select
              fluid
              label="Categorias"
              width={5}
              options={Categorias}
              className="for_Servicos"
              placeholder='Qual a categoria do serviço?'
              />

               <Form.Select
              fluid
              label="Decoração"
              width={5}
              className="for_Servicos"
              options={Decoracao}
              placeholder='Qual a Decoração do serviço?'
              />

            <Form.Select
              fluid
              label="Região de Pernambuco"
              width={3}
              className="for_Servicos"
              options={Regiao}
              placeholder='Qual a Região do serviço?'
              />

            <Form.Input
               className="for_Servicos"
              label='Telefone'
              width={3}
             
            >
              <InputMask
           
                  mask="(99) 9999.9999"
                  maskChar={null}
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
    <Segment inverted>
    <Form  className='Color-gre'>
            <h1>Serviço 02</h1>
            <Form.Group Widths='equal'>

              <Form.Select
              fluid
              label="Categorias"
              width={5}
              options={Categorias}
              className="for_Servicos"
              placeholder='Qual a categoria do serviço?'
              />

               <Form.Select
              fluid
              label="Decoração"
              width={5}
              className="for_Servicos"
              options={Decoracao}
              placeholder='Qual a Decoração do serviço?'
              />

            <Form.Select
              fluid
              label="Região de Pernambuco"
              width={3}
              className="for_Servicos"
              options={Regiao}
              placeholder='Qual a Região do serviço?'
              />

            <Form.Input
               className="for_Servicos"
              label='Telefone'
              width={3}
             
            >
              <InputMask
           
                  mask="(99) 9999.9999"
                  maskChar={null}
              />
              
              </Form.Input>
              </Form.Group>

              <Form.Group>
               <TextArea
           placeholder='Descrição de serviço ' />
          </Form.Group>
            
            <Button>Adicionar</Button>
            
        </Form>
        
    </Segment>
    <Segment >
    <Form  className='Color-gre'>
            <h1>Serviço 03</h1>
            <Form.Group Widths='equal'>

              <Form.Select
              fluid
              label="Categorias"
              width={5}
              options={Categorias}
              className="for_Servicos"
              placeholder='Qual a categoria do serviço?'
              />

               <Form.Select
              fluid
              label="Decoração"
              width={5}
              className="for_Servicos"
              options={Decoracao}
              placeholder='Qual a Decoração do serviço?'
              />

            <Form.Select
              fluid
              label="Região de Pernambuco"
              width={3}
              className="for_Servicos"
              options={Regiao}
              placeholder='Qual a Região do serviço?'
              />

            <Form.Input
               className="for_Servicos"
              label='Telefone'
              width={3}
             
            >
              <InputMask
           
                  mask="(99) 9999.9999"
                  maskChar={null}
              />
              
              </Form.Input>
              </Form.Group>

              <Form.Group>
               <TextArea
           placeholder='Descrição de serviço ' />
          </Form.Group>
            
            <Button>Adicionar</Button>
            
        </Form>
        
    </Segment>
    

    

    </Header>
</body>




)






}