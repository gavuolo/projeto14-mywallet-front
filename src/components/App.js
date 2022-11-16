import styled from "styled-components"
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./pages/contexts/AuthContext";
import GlobalStyle from "./GlobalStyle";

//telas
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"
import TelaHome from "./pages/TelaHome/TelaHome"
import TelaNovaEntrada from "./pages/TelaNovaEntrada/TelaNovaEntrada"
import TelaNovaSaida from "./pages/TelaNovaSaida/TelaNovaSaida"

export default function App() {
    return (
        <BrowserRouter>
            <Content>
                <GlobalStyle />
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<TelaLogin />} />
                        <Route path="/cadastro" element={<TelaCadastro />} />
                        <Route path="/home" element={<TelaHome />} />
                        <Route path="/novaEntrada" element={<TelaNovaEntrada />} />
                        <Route path="/novaSaida" element={<TelaNovaSaida />} />
                    </Routes>
                </AuthProvider>
            </Content>
        </BrowserRouter>
    )
}

const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #8C11BE;
;
`