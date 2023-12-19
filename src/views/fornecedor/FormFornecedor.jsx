import axios from "axios";
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Form, Icon } from 'semantic-ui-react';

export default function CadaFornecedor() {
    const { state } = useLocation();
    const [idFornecedor, setIdfornecedor] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [telefone, setTelefone] = useState();
    const [imagem, setImagem] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/fornecedor/" + state.id)
                .then((response) => {
                    setIdfornecedor(response.data.id)
                    setNome(response.data.nome)
                    setEmail(response.data.email)
                    setSenha(response.data.senha)
                    setTelefone(response.data.telefone)
                    setImagem(response.data.imagem)
                })
        }
    }, [state])

    function salvar() {
        let fornecedorRequest = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone,
            imagem: imagem



        }
        if (idFornecedor != null) { //Alteração:
            axios.put("http://localhost:8082/api/fornecedor/" + idFornecedor, fornecedorRequest)

                .then((response) => { console.log('fornecedor alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um fornecedor.') })

        } else { //Cadastro:
            axios.post("http://localhost:8082/api/fornecedor", fornecedorRequest)

                .then((response) => {
                    console.log('fornecedor cadastrado com sucesso.')
                    let formData = new FormData();
                    formData.append('imagem', imagem);
                    axios.put('http://localhost:8082/api/fornecedor/cadastrarImagem/' + Response.data.id, formData)
                })

                .catch((error) => { console.log('Erro ao incluir o fornecedor.') })
        }
    }
    return (

        <html className='html_formUsu'>

            <div className="for_formUsu">
                <div style={{ marginTop: '34%' }}>

                    <Container  >

                        <h2 align="center" class="titulo_cadastro"> Cadastro Fornecedor</h2>



                        <div style={{ marginTop: '5%' }}>

                            <Form enctype="multipart/form-data">
                                <Form.Input
                                    className="for_for"
                                    label='Foto de perfil'
                                    type="file"
                                    name="file"
                                    value={imagem}
                                    onChange={e => setImagem(e.target.value)}
                                >

                                </Form.Input>
                                <Form.Group >

                                    <Form.Input
                                        required
                                        fluid
                                        color="green"
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
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}
                                    >

                                    </Form.Input>



                                </Form.Group >
                                <Form.Group >

                                    <Form.Input
                                        fluid
                                        label='senha'
                                        width={16}
                                        className="for_for"
                                        value={senha}
                                        onChange={e => setSenha(e.target.value)}
                                    >
                                    </Form.Input>
                                </Form.Group >

                                <Form.Group>
                                    <Form.Input
                                        fluid
                                        label='Telefone'
                                        width={16}
                                        type="text"
                                        className="for_for"
                                        value={telefone}
                                        onChange={e => setTelefone(e.target.value)}
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
                                    onClick={() => salvar()}
                                    type="button"
                                    circular
                                    color='brown'
                                    floated='left'
                                >
                                    <Icon name='home' />
                                    <Link to={'/'} style={{ color: 'pink' }} >Voltar</Link>

                                </Button>

                                <Button
                                    onClick={() => salvar()}
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

