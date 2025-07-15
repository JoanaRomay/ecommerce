import React, { useState, useEffect } from 'react';
import Categorias from '../components/Categorias';
import CardsProductos from '../components/CardsProductos';
import categoriaService from '../service/categoriaService';
import productoService from '../service/productoService';
import Footer from '../components/Footer';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  useEffect(() => {
    productoService.obtenerProductos()
      .then(data => {
        console.log('Productos recibidos:', data);
        setProductos(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    categoriaService.obtenerCategorias()
      .then(data => setCategorias([{ id: 0, nombre: 'Todos' }, ...data]))
      .catch(console.error);
  }, []);

  const idCategoriaSeleccionada = categorias.find(cat => cat.nombre === categoriaSeleccionada)?.id || 0;

  const productosFiltrados = idCategoriaSeleccionada === 0
    ? productos
    : productos.filter(p => p.idCategoria === idCategoriaSeleccionada);

    return (
      <>

    <div>
      <Categorias
        categorias={categorias.map(cat => cat.nombre)}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaChange={setCategoriaSeleccionada}
      />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-[80%] mx-auto px-4">


        {productosFiltrados.map(prod => (
          <CardsProductos
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            categoria={categorias.find(c => c.id === prod.idCategoria)?.nombre || ''}
            imagen={prod.imgUrl}
            oferta={prod.oferta}
            descuento={prod.descuento}
          />
        ))}
      </div>
            </div>
     <Footer />
        </>
  );
}
