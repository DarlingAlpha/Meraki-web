import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Rating, Table } from 'semantic-ui-react';

export default function ServicosdoFornecedor() {
  const [Fornecedor] = useState([
    {
      id:"01",
      Foto:"https://as2.ftcdn.net/v2/jpg/05/86/91/55/1000_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.jpg",
      NomeFornecedor:"Gabriel",
      
    }

  ])
  const [Servico] = useState([
    {
      id:"01",
      NomeFornecedor:"Gabriel",
      Categoria:"Buffet",
      decoracoes:"Infantil",
      Avaliações:"defaultRating={0} maxRating={5}",
      Regiao:"Recife",
      Detalhes:"Buffe decorativo infantil"
    },{
      id:"01",
      Categoria:"Decoração",
      decoracoes:"Infantil",
      Avaliações:"defaultRating={0} maxRating={5}",
      Regiao:"Jaboatão dos Guararapes",
      Detalhes:"Decoração decorativo infantil"
    }

  ]);
   
    return (

  
  <Header as='h2' >
    {Fornecedor.map(Fornecedor => (
    <div key={Fornecedor.id} style={{display:'flex', alignItems:'center'}}>
      {/* Falta Imagem */}
    <Image circular 
    src={Fornecedor.Foto} style={{width:'50px', height:'50px'}}>
    
    </Image>
    {/* Nome do fornecedor */}
    <div >
    {Fornecedor.NomeFornecedor}
    </div>
    </div>
     ))}
  

    <body>
      <div>
        <Button ><Link to={'/PerfilFornecedor'}>Novo Serviço</Link></Button>
      </div>
    <Table celled padded>
    <Table.Header>
      <Table.Row>
<Table.HeaderCell singleLine>Categoria</Table.HeaderCell>
        <Table.HeaderCell>decorações</Table.HeaderCell>
        <Table.HeaderCell>Avaliações</Table.HeaderCell>
        <Table.HeaderCell>Região</Table.HeaderCell>
        <Table.HeaderCell>Detalhes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {Servico.map(Servico => (
      <Table.Row key={Servico.id}>
        <Table.Cell>
          <Header as='h3' textAlign='center'>
            {Servico.Categoria}
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>{Servico.decoracoes}</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={0} maxRating={5} disabled/>
        </Table.Cell>
        <Table.Cell textAlign='right'>
        {Servico.Regiao}
        </Table.Cell>
        <Table.Cell>
        {Servico.Detalhes}
        </Table.Cell>
      </Table.Row>
    ))}
    </Table.Body>
  </Table>
 
</body>
  
    
  </Header>
  
    ) 
 }