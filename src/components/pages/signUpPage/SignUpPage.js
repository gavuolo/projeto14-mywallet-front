import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../API_URL";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate("/");

  function Cadastrar() {
    const post = axios.post(`${API}/sign-up`, form);
    post.then(() => {
      alert("Sucesso! Usuário cadastrado");
      navigate("/");
    });
    post.catch((ress) => {
      alert(ress.response.data);
    });
  }

  function Formulario(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <>
      <Content>
        <Logo>MyWallet</Logo>
        <Form>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={Formulario}
            required
          />
          <input
            name="email"
            type="text"
            placeholder="E-mail"
            value={form.email}
            onChange={Formulario}
            required
          />
          <input
            name="password"
            type="text"
            placeholder="Senha"
            value={form.password}
            onChange={Formulario}
            required
          />
          <input
            name="confirmPassword"
            type="text"
            placeholder="Confirme a senha"
            value={form.confirmPassword}
            onChange={Formulario}
            required
          />
        </Form>
        <Button onClick={Cadastrar}>
            <p>Entrar</p>
        </Button>
        <SignUp>
          <Link to="/">
            <h1>Já tem uma conta? Entre agora!</h1>
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
