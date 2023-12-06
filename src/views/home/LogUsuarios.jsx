import React from "react";
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Icon } from 'semantic-ui-react';


export default function LogUsuarios() {
    
    return (

        <div class="Log_Usuarios">
            <div style={{ marginTop: '4%' }}>

                <Container  >

                    <h2 align="center" class="titulo_cadastro"> Login Usuarios</h2>



                    <div style={{ marginTop: '5%' }}>

                        <Form >
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
                                    required
                                    fluid
                                    label='senha'
                                    width={16}
                                    className="for_for"
                                />
                            </Form.Group >
                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                       
                                type="button"
                                circular
                                floated='left'
                            >
                                <Icon name='home' />
                                <Link to={'/'}>Voltar</Link>

                            </Button>

                            <Button
                           
                                type="button"
                                circular
                                color='olive'
                                floated='right'
                            >
                                <Icon name='heart' />
                                <Link to={'/'}>Entrar</Link>
                        
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );
}

