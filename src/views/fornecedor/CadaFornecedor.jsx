import React from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Icon } from 'semantic-ui-react';

export default function CadaFornecedor() {
    function File (img){
        const selecionar = img.target.files[0];
        const imagem = document.getElementById('imagemExibicao');

        if(selecionar){
            //definição do src
            const src =URL.createObjectURL (selecionar);
            imagem.src = src;
        }else{
            // se nada for selecionado
            imagem.src ='';
        }
    }
    return (
        <div class="For_Fornecedor">
        <div style={{marginTop: '4%'}}>

            <Container  >

                <h2 align="center" class="titulo_cadastro"> Cadastro Fornecedor</h2>

               

                <div style={{marginTop: '5%'}}>
                   
                    <Form >
                        <div class="img-cadastroFornecedor">
                    <p>Escolha imagens de seu trabalho</p>
                    <div class='Imagen'>
                    <br  />
                    <img id="imagemExibicao" src="" alt="Imagem Selecionada" style={{ maxWidth: '100px' }} />
                    <br /></div>
                    <Form.Group >
                  
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                
                    <Form.Group >
                    
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                
                    <Form.Group >
                    
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                   
                    <Form.Group >
                    
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                   
                    <Form.Group >
                    
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                 
                    <Form.Group >
                    
                        <input type="file"
                        name="imagem"
                        accept="image/*"
                        onChange={File}
                        />

                    </Form.Group >
                    </div>
                        
                         
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

