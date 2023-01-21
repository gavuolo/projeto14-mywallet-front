import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../API_URL";

export default function HomePage() {
  const { user, token } = useContext(AuthContext);
  const header = { headers: { Authorization: `Bearer ${token}` } };
  //fazer o get do Balance nesta rota
  return (
    <>
      <Content>
        <TopBox>
          <p>Olá, {user.name}</p>
          <ion-icon name="exit-outline"></ion-icon>
        </TopBox>
        <Record>
          <Date>
            <div>20/10</div>
            <div>gastei mesmo</div>
            <div> 534,99</div>
          </Date>
          <Balance>
            <div>SALDO:</div>
            <div>2213,32</div>
          </Balance>
        </Record>
        <DivButton>
          <Button>
            <Link to="/sign-up">
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova entrada</p>
            </Link>
          </Button>
          <Button>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova saída</p>
          </Button>
        </DivButton>
      </Content>
    </>
  );
}
//<h1>Não há registros de entrada ou saída</h1>
const Content = styled.div`
  margin-top: 25px;
`;
const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ion-icon {
    width: 23px;
    height: 23px;
    color: #ffffff;
    cursor: pointer;
  }
`;
const Record = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  //quando tiver transação, vai virar justify-concent: flex-start
  flex-direction: column;
  margin: 0 auto;
  margin-top: 22px;
  margin-bottom: 40px;
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  overflow: auto;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    width: 180px;
    height: 46px;
    color: #868686;
  }
`;
const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 13px;
`;
const Button = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  padding: 2%;
  ion-icon {
    width: 22px;
    height: 22px;
    color: #ffffffff;
    cursor: pointer;
  }
  p {
    font-size: 17px;
    margin-top: 20px;
    width: 64px;
    height: 64px;
  }
`;
const Date = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  padding: 5%;
  div {
    font-size: 16px;
    font-weight: 400;
  }
  div:nth-child(1) {
    color: #c6c6c6;
  }
  div:nth-child(2) {
    color: #000000;
    width: 60%;
  }
  div:nth-child(3) {
    //fazer um ternário para a cor dependendo do type
    color: #c70000;
  }
`;
const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 1%;
  top: 480px;
  bottom: 0;
  width: 326px;
  height: 40px;
  div:nth-child(2) {
    color: #03ac00;
  }
`;
