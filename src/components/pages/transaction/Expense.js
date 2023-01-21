import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../API_URL";

export default function Expense() {
    return (
        <>
            <Content>
                <p>Nova saída</p>
                <Form>
                    <input
                    name="Value"
                    type="text" 
                    placeholder="Valor"
                    ></input>
                    <input type="text" placeholder="Descrição"></input>
                </Form>
                <Button>
                    <p>Salvar saída</p>
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