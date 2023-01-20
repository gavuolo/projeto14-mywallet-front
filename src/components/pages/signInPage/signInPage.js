import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../API_URL";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function Login() {
    const body = {
      email: email,
      password: password,
    };

    const post = axios.post(`${API}/sign-in`, body);

    post.then((ress) => {
      console.log(ress.data.token);
      navigate('/')
    });
    post.catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <>
      <Content>
        <Logo>MyWallet</Logo>
        <Form>
          <input
            name="email"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="text"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button onClick={Login}>
          <p>Entrar</p>
        </Button>
        <SignUp>
          <Link to="/sign-up">
            <h1>Primeira vez? Cadastre-se!</h1>
          </Link>
        </SignUp>
      </Content>
    </>
  );
}
const Content = styled.div`
  margin-top: 159px;
`;
const Logo = styled.h5`
  display: flex;
  justify-content: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
const Button = styled.div`
  width: 326px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a328d6;
  border-radius: 5px;
  cursor: pointer;
`;
const SignUp = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-top: 39px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
