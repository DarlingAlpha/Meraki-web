import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Form, Icon, Image } from 'semantic-ui-react';


export default function LogUsuarios() {
    
    return (
<body class="Log_Usuarios">

                <Container style={{width:'30em'}}>

                    <h1 align="center" class="titulo_cadastro"> Login Usuarios</h1>

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
                                inverted
                                type="button"
                                circular
                                color='pink'
                                floated='right'
                            >
                                <Icon name='heart' />
                                <Link to={'/'}>Entrar</Link>
                        
                            </Button>

                        </div>

                    </div>

                </Container>
                <Image
              src='logo.png' style={{ width: '60em', height: '60em' }}>

            </Image>
        
        </body>

    );
}

