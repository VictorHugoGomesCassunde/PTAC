import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Perfil from './Pages/Perfil';
import CadastrarMesas from './Pages/CadastrarMesas';
import ReservarMesas from './Pages/ReservarMesas';
import BuscarMesas from './Pages/BuscarMesas';
import Header from './components/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastrar" element={<CadastrarMesas />} />
        <Route path="/reservar" element={<ReservarMesas />} />
        <Route path="/buscar" element={<BuscarMesas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;