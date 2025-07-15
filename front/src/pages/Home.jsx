import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import ProductosDestacados from '../components/ProductosDestacados';
import Oferta from '../components/Oferta';
import Footer from '../components/Footer';
import productoService from '../service/productoService'; 
import categoriaService from '../service/categoriaService';

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productoService.obtenerProductos()
      .then(data => setProductos(data))
      .catch(error => console.error(error));
  }, []);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriaService.obtenerCategorias()
      .then(data => setCategorias(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Slider />
      <ProductosDestacados productos={productos} categorias={categorias}  />
      <Oferta />
      <Footer />
    </>
  );
}

export default Home;
