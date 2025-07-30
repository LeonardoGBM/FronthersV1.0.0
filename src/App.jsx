import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Footer from './components/footer'
import Carrusel from './components/carrusel';
import Inicio from './pages/Inicio'
import Somos from './pages/Somos';
import Contactos from './pages/contactos';



import Servicio from './pages/Servicio';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="servicio" element={<Servicio />} />
        <Route path="somos" element={<Somos />} />
        <Route path="contactos" element={<Contactos />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
