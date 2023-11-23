import axios from "axios";
import React, {useEffect, useState} from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Form, Icon } from 'semantic-ui-react';


export default function CadaCliente() {

    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [regiao, setRegiao] = useState();
    const [telefone, setTelefone] = useState();

    useEffect(() => {
        if (state != null && state.id !=null){
            axios.get("http://localhost:8082/api/cliente/" + state.id)
            .then((response) =>{
                setIdCliente(response.data.id)
                setNome(response.data.nome)
                setEmail(response.data.email)
                setSenha(response.data.senha)
                setRegiao(response.data.regiao)
                setTelefone(response.data.telefone)
            })
        }
    }, [state])

    function salvar(){

        let clienteRequest = {
            nome: nome,
            email: email,
            senha: senha,
            regiao: regiao,
            telefone: telefone
        }
        axios.post("http://localhost:8082/api/cliente", clienteRequest)
        .then((response) => { console.log('Cliente cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir o cliente.') })
    }

    return (

        <div class="For_Cliente">
            <div style={{marginTop: '4%'}}>

                <Container  >

                    <h2 align="center" class="titulo_cadastro"> Cadastro Cliente</h2>

                   

                    <div style={{marginTop: '5%'}}>

                        <Form >
                             
                            <Form.Group >

                                <Form.Input
                                    required
                                    fluid
                                    color= "green"
                                    label='Nome'
                                    maxLength="100"
                                    className="for_for"
                                    width={16}
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                  

                                />
                                </Form.Group>

                                <Form.Group >
                                
                                  

                                <Form.Input
                                    required
                                    fluid
                                    label='Email'
                                    className="for_for"
                                    width={16}
                                    >
                                    <InputMask
                                     required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                        
                                    /> 
                                    
                                </Form.Input>

                            
                        
                            </Form.Group >
                            <Form.Group >

                                <Form.Input
                                    fluid
                                    label='senha'
                                    type='password'
                                    width={16}
                                    className="for_for"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                    >
                                </Form.Input>
                                </Form.Group >
                                <Form.Group >
                                
                             
                                <Form.Input
                                    fluid
                                    label='Região'
                                    width={16}
                                    className="for_for"
                                    value={regiao}
                                    onChange={e => setRegiao(e.target.value)}
                                    > 
                                </Form.Input>
                                </Form.Group>
                              
                                <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Telefone'
                                    width={16}
                                    className="for_for"
                                >
                                    <InputMask 
                                           mask="(99) 9999.9999"
                                        maskChar={null}
                                       value={telefone}
                                       onChange={e => setTelefone(e.target.value)}
                                        
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                       
                            <Button
                                inverted
                                type="button"
                                circular
                                color='grey'
                                floated='left'
                            >
                              <Icon name='home' />
                              <Link to={'/'}>Voltar</Link>

                            </Button>
                                
                            <Button
                                inverted
                                icon
                                type="button"
                                circular
                                color='olive'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='check' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );
    }

