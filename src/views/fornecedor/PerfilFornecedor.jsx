import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Image, Label, Table } from 'semantic-ui-react';

export default function PerfilFornecedor() {  
  const [lista] = useState([
    {
      id:"01",
      nome:"Gabriel",
      cpf:"1321321312",
      foneCelular:"23213213213",
      foneFixo:"2132321312"
    }
  ]);
   
    return (
  <Header as='h2' >
    <Image circular src='https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg' />
    Metodo Get Nome do Fornecedor
    <div>
    <Label>
    <Icon name='mail' /> 23
    </Label>
    </div>

    <body>
  <Table color='yellow' sortable celled>
  <Table.Header >
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>CPF</Table.HeaderCell>
            <Table.HeaderCell>Fone Celular</Table.HeaderCell>
            <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Editar</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    {lista.map(cliente => (

<Table.Row key={cliente.id}>
    <Table.Cell>{cliente.nome}</Table.Cell>
    <Table.Cell>{cliente.cpf}</Table.Cell>
    <Table.Cell>{cliente.foneCelular}</Table.Cell>
    <Table.Cell>{cliente.foneFixo}</Table.Cell>
    <Table.Cell textAlign='center'>

    </Table.Cell>
</Table.Row>
))}

  </Table>
</body>
<Button
                            inverted
                            type="button"
                            circular
                            color='olive'
                            floated='right'
                        >
                            <Icon name='check' />
                            <Link to={'/CadastroServicos'}>Voltar</Link>
                        </Button>
  
    
  </Header>
  
    ) 
 }