import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./pages/contexts/AuthContext";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/signInPage";
import Incoming from "./pages/transaction/Incoming";
import Expense from "./pages/transaction/Expense";

export default function App() {
  return (
    <BrowserRouter>
      <Content>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nova-entrada" element={<Incoming />} />
            <Route path="/nova-saida" element={<Expense />} />
          </Routes>
        </AuthProvider>
      </Content>
    </BrowserRouter>
  );
}

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    justify-content: center;
;
`