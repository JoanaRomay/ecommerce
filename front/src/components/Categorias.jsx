import React, { useState, useEffect } from 'react';

const Categorias = ({ categorias, categoriaSeleccionada, onCategoriaChange }) => {
  const [seleccion, setSeleccion] = useState(categoriaSeleccionada || 'Todos');

  useEffect(() => {
    if (categoriaSeleccionada !== seleccion) {
      setSeleccion(categoriaSeleccionada);
    }
  }, [categoriaSeleccionada, seleccion]);

  const handleClick = (cat) => {
    setSeleccion(cat);
    if (onCategoriaChange) onCategoriaChange(cat);
  };

  return (
    <div className="flex flex-nowrap items-center justify-center md:justify-between bg-white p-6 mb-8 w-full max-w-5xl mx-auto gap-4 mt-5">

     <div className="hidden lg:flex items-center gap-2 ">
            <span className="text-lg font-semibold text-gray-700">Categoría:</span>
        </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200
              ${seleccion === cat 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-transparent text-gray-700 hover:bg-red-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
