import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {

    return (
        <>
            <Content>
                <TopBox>
                    <p>Olá, Fulana</p>
                    <ion-icon name="exit-outline"></ion-icon>
                </TopBox>
                <Record>
                    <h1>Não há registros de
                        entrada ou saída</h1>
                </Record>
                <DivButton>
                    <Button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                    </Button>

                    <Button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                    </Button>
                </DivButton>
            </Content>
        </>
    )
}
const Content = styled.div`
    margin-top: 25px;
`
const TopBox = styled.div`
display: flex;
p{
    margin-right: 210px;
}
    ion-icon{
        width: 23px;
        height: 23px;
        color: #FFFFFF;
        cursor: pointer;
    }
`
const Record = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 22px;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        width: 180px;
        height: 46px;
        color: #868686;
    }
`
const DivButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 13px;
`
const Button = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    padding: 2%;
    ion-icon{
        width: 22px;
        height: 22px;
        color: #ffffffff;
        cursor: pointer;
    }
    p{
        font-size: 17px;
        margin-top: 20px;
        width: 64px;
        height: 64px;
    }
`