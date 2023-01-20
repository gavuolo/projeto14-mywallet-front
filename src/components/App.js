import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./pages/contexts/AuthContext";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/signInPage";
export default function App() {
  return (
    <BrowserRouter>
      <Content>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage/>} />
            <Route path="/sign-up" element={<SignUpPage />} />
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