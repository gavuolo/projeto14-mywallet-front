import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function TelaLogin() {
    
    return (
        <>
            <Content>

                <Logo>MyWallet</Logo>
                <Form>
                    <input type="text" placeholder="E-mail"></input>
                    <input type="text" placeholder="Senha"></input>
                </Form>
                <Button>
                <Link to="/novaEntrada">
                    <p>Entrar</p>
                </Link>
                </Button>
                <SignUp>
                    <Link to="/cadastro">
                    <h1>Primeira vez? Cadastre-se!</h1>
                    </Link>
                </SignUp>
            </Content>
        </>
    )

}
const Content = styled.div`
    margin-top: 159px;
`
const Logo = styled.h5`
    display: flex;
    justify-content: center;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`
const Button = styled.div`
    width: 326px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #A328D6;
    border-radius: 5px;
    cursor: pointer;
`
const SignUp = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 39px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`