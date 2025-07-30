import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Carrusel from './components/carrusel';
import Inicio from './pages/Inicio';
import Servicio from './pages/Servicio';
import Somos from './pages/Somos';
import Contactos from './pages/contactos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Carrusel />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicio" element={<Servicio />} />
          <Route path="/Somos" element={<Somos />} />
          <Route path="/Contactos" element={<Contactos />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
