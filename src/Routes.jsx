import { BrowserRouter, Routes, Route } from "react-router-dom";

 import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import ReservarMesas from "./Pages/ReservarMesas";
import MinhasReservas from "./Pages/MinhasReservas";
import Header from "./components/Header";
import Cardapio from "./Pages/cardapio";


function AppRoutes() {
    return (
    <BrowserRouter>

      <Header />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reservar" element={<ReservarMesas />} />
        <Route path="/minhas" element={<MinhasReservas />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
