import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CadastrarMesas from './Pages/CadastrarMesas';
import ReservarMesas from './Pages/ReservarMesas';
import Header from './components/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<CadastrarMesas />} />
        <Route path="/reservar" element={<ReservarMesas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
