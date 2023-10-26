import React from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Icon } from 'semantic-ui-react';

export default function CadaFornecedor() {

    return (
        <div class="">
        <div style={{marginTop: '4%'}}>

            <Container  >

                <h2 align="center" class="titulo_cadastroC"> Cadastro Fornecedor</h2>

               

                <div style={{marginTop: '5%'}}>

                    <Form >
                    <br />
                        <img id="imagemExibicao" src="" alt="Imagem Selecionada" style={{ maxWidth: '100px' } } />
                        <br />
                    <Form.Group >
                        <label>Imagen</label>
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                        
                         
                        <Form.Group >

                            <Form.Input
                                required
                                fluid
                                color= "green"
                                label='Nome'
                                maxLength="100"
                                className="for_for"
                                width={16}
                              

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
                                
                                    
                                /> 
                                
                            </Form.Input>

                        
                    
                        </Form.Group >
                        <Form.Group >

                            <Form.Input
                                fluid
                                label='senha'
                                width={16}
                                className="for_for"
                                >
                                <InputMask 
                                    
                                    
                                /> 
                            </Form.Input>
                            </Form.Group >
                            <Form.Group >
                            
                         
                            <Form.Input
                                fluid
                                label='Região'
                                width={16}
                                className="for_for"
                                >
                                <InputMask 
                                
                                   
                                /> 
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
                            type="button"
                            circular
                            color='olive'
                            floated='right'
                        >
                            <Icon name='save' />
                            Salvar
                        </Button>

                    </div>

                </div>
                
            </Container>
        </div>
    </div>
    );
    }

