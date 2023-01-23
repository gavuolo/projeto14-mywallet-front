import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { REACT_APP_API_URL } from "../../API_URL";

export default function Incoming() {
  const { token } = useContext(AuthContext);
  const header = { headers: { Authorization: `Bearer ${token}` } };
  const [form, setForm] = useState({
    value: "",
    description: "",
    type: "nova-entrada",
  });
  const navigate = useNavigate();
  function Transations() {
    const post = axios.post(`${REACT_APP_API_URL}/balance`, form, header);
    post.then((res) => {
      navigate("/home");
    });
    post.catch((err) => {
      alert(err.response.data);
    });
  }
  function BodyForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <Content>
      <p>Nova entrada</p>
      <Form>
        <input
          data-test="registry-amount-input"
          name="value"
          type="text"
          placeholder="Valor"
          value={form.value}
          onChange={BodyForm}
        />
        <input
          data-test="registry-name-input"
          name="description"
          type="text"
          placeholder="Descrição"
          value={form.description}
          onChange={BodyForm}
        />
      </Form>
      <Button onClick={Transations} data-test="registry-save">
        <p>Salvar entrada</p>
      </Button>
    </Content>
  );
}

const Content = styled.div`
  margin-top: 25px;
  p {
    padding: 25px 0 25px 0;
    font-size: 26px;
  }
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
  p {
    font-size: 20px;
  }
`;
