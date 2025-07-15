import React from 'react';
import Box from '@mui/material/Box';
import CardsProductos from './CardsProductos'; 

function ProductosDestacados({ productos, categorias }) {
  const productosEnOferta = productos.filter(p => p.oferta);

  return (
    <>
          <h1 className='text-[22px] md:text-[38px] text-center pb-5'>Productos Destacados</h1>
          <p className='text-center font-semibold'>Los botones de las cards aun no llevan a ningun lado, trabajé todo en la pagina PRODUCTOS</p>
          
          <div className="mx-auto w-full md:w-4/5 rounded-lg p-4">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
    {productosEnOferta.map(producto => (
      <CardsProductos
        key={producto.id}
        nombre={producto.nombre}
        precio={producto.precio}
        categoria={categorias.find(c => c.id === producto.idCategoria)?.nombre || ''}
        imagen={producto.imgUrl}
        oferta={producto.oferta}
        descuento={producto.descuento}
      />
    ))}
  </div>
</div>

    </>
  );
}

export default ProductosDestacados;
