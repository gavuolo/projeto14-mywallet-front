import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../API_URL";

export default function HomePage() {
  const { user, token } = useContext(AuthContext);
  const header = { headers: { Authorization: `Bearer ${token}` } };
  const [balance, setBalance] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const get = axios.get(`${API}/balance`, header);
    get.then((res) => {
      setBalance(res.data);
      console.log(res.data);
    });
    get.catch((err) => console.log(err.response.data.message));
  }, []);
  console.log(balance);
  function RenderBalance() {
    return (
      <>
        {balance.map((t, index) => {
          return (
            <Date
              key={index}
              color={t.type === "nova-entrada" ? "#03AC00" : "#C70000"}
            >
              <div>{t.data}</div>
              <div>{t.description}</div>
              <div>{t.value}</div>
            </Date>
          );
        })}
      </>
    );
  }
  function Teste(){
    let total = 0;
    balance.forEach((t) => {
      if (t.type === "nova-entrada") {
        total += Number(t.value);
      } else {
        total -= Number(t.value);
      }
    });
    return total
  }
 function LogOut(){
  navigate("/");
 }
  return (
    <>
      <Content>
        <TopBox>
          <p>Olá, {user.name}</p>
          <ion-icon name="exit-outline" onClick={LogOut}></ion-icon>
        </TopBox>
        <Record>
          {balance === undefined ? (
            <h1>Não há registros de entrada ou saída</h1>
          ) : (
            <>
              <RenderBalance />
              <Balance>
                <div>SALDO:</div>
                <div>{Teste()}</div>
              </Balance>
            </>
          )}
        </Record>
        <DivButton>
          <Button>
            <Link to="/nova-entrada">
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova entrada</p>
            </Link>
          </Button>
          <Button>
            <Link to="/nova-saida">
              <ion-icon name="remove-circle-outline"></ion-icon>
              <p>Nova saída</p>
            </Link>
          </Button>
        </DivButton>
      </Content>
    </>
  );
}

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
  //type={balance === undefined ?  'center' : 'flex-start'}
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
    color: ${(props) => props.color};
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
