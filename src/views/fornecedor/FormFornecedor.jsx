import React from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Icon } from 'semantic-ui-react';

export default function CadaFornecedor() {



    //     const selecionar = img.target.files[0];
    //     const imagem = document.getElementById('imagemExibicao');

    //     if (selecionar) {
    //         //definição do src
    //         const src = URL.createObjectURL(selecionar);
    //         imagem.src = src;
    //     } else {
    //         // se nada for selecionado
    //         imagem.src = '';
    //     }
    // }
    return (

        <html className='html_formUsu'>

            <div className="for_formUsu">
                <div style={{ marginTop: '34%' }}>

                    <Container  >

                        <h2 align="center" class="titulo_cadastro"> Cadastro Fornecedor</h2>



                        <div style={{ marginTop: '5%' }}>

                            <Form enctype="multipart/form-data">
                                <Form.Group >

                                    <Form.Input
                                        required
                                        fluid
                                        color="green"
                                        label='Nome'
                                        maxLength="100"
                                        className="for_for"
                                        width={16}


                                    />
                                    <p>
                                        <input type="file" name='file' />
                                    </p>
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

                            <div style={{ marginTop: '4%' }}>

                                <Button

                                    type="button"
                                    circular
                                    color='brown'
                                    floated='left'
                                >
                                    <Icon name='home' />
                                    <Link to={'/'} style={{ color: 'pink' }} >Voltar</Link>

                                </Button>

                                <Button

                                    type="button"
                                    circular
                                    color='olive'
                                    floated='right'
                                >
                                    <Icon name='check' />
                                    <Link to={'/'} style={{ color: 'black' }}>Confirmar</Link>
                                </Button>

                            </div>

                        </div>

                    </Container>
                </div>
            </div>
        </html>
    );
}

