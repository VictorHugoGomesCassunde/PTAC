import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Perfil from "./Pages/Perfil";
import ReservarMesas from "./Pages/ReservarMesas";
import BuscarMesas from "./Pages/BuscarMesas";
import CadastrarMesas from "./Pages/CadastrarMesas";
import Cardapio from "./Pages/Cardapio"; 
import MinhasReservas from "./Pages/MinhasReservas"; 


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/reservar" element={<ReservarMesas />} />
                <Route path="/buscar" element={<BuscarMesas />} />
                <Route path="/mesas/cadastrar" element={<CadastrarMesas />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/minhas" element={<MinhasReservas />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
