import axios from "axios";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Icon, Image } from 'semantic-ui-react';
import { notifyError } from '../../views/util/Util';
import { registerSuccessfulLoginForJwt } from '../util/AuthenticationService';

export default function LogUsuarios() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    function entrar() {

        if (username !== '' && senha !== '') {

            let authenticationRequest = {
                username: username,
                password: senha,
            }

            axios.post("http://localhost:8082/api/login", authenticationRequest)
                .then((response) => {

                    registerSuccessfulLoginForJwt(response.data.token, response.data.expiration)
                    navigate("/home");

                })
                .catch((error) => {

                    notifyError('Usuário não encontrado')
                })
        }
    }
    
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
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
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
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
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
                                onClick={()=> entrar()}
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

