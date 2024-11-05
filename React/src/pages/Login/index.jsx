import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Copy, Form, Label } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.png';

const Login = () => {
  return (
    <Container>   
        <h2>Acesse sua conta</h2>
        <p>Entre com seu email e senha!</p>
        <ContainerForm>
            <Form>
                <Label>E-mail</Label>
                <Input type='text' placeholder='Informe seu E-mail' />
                <Label>Senha</Label>
                <Input type='text' placeholder='Informe sua Senha'/>
                <Button>Fazer Login</Button>
                <li><Link to="/cadastro"><span> Não tem cadastro? </span></Link></li>
            </Form>
        </ContainerForm>
        <Copy>
            <img src={logo} alt=""/>
        </Copy>
    </Container>
  )
}

export default Login;