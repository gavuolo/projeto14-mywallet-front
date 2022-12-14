import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TelaNovaEntrada() {

    return (
        <>
            <Content>
                <p>Nova entrada</p>
                <Form>
                <input type="text" placeholder="Valor"></input>
                <input type="text" placeholder="Descrição"></input>
                </Form>
                
                <Button>
                    <p>Salvar entrada</p>
                </Button>
            </Content>
        </>
    )
}
const Content = styled.div`
    margin-top: 25px;
    p{ 
        padding: 25px 0 25px 0;
        font-size: 26px;
    }
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
    p{
        font-size: 20px;
    }
`