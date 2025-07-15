import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../service/api";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [mensajes, setMensajes] = useState([]);
    const [nuevoMensaje, setNuevoMensaje] = useState('');
    
    const [variantes, setVariantes] = useState([]);
    useEffect(() => { 
        API.get(`/productos/${id}/variantes`)
            .then(res => setVariantes(res.data))
        .catch(err => console.error('Error al cargar variantes', err))
    }, [id])  
    
    
    //cupon
  const [codigoCupon, setCodigoCupon] = useState('');
  const [mensajeCupon, setMensajeCupon] = useState('');
  const [cuponActivo, setCuponActivo] = useState(null);
  useEffect(() => {
    API.get(`/productos/${id}`)
      .then((res) => setProducto(res.data))
      .catch((error) => console.error("Error al cargar producto", error));
  }, [id]);

  useEffect(() => {
    API.get(`/productos/${id}/mensajes`)
      .then((res) => setMensajes(res.data))
      .catch((error) => console.error("Error al cargar mensajes", error));
  }, [id]);

  if (!producto) return <p className="text-center mt-10">Cargando producto...</p>;

  const precioFormateado = (num) =>
    num.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const cuotas = 24;
  const valorCuota = producto.precio / cuotas;

  const enviarMensaje = () => {
    API.post(`/productos/${id}/mensajes`, { texto: nuevoMensaje })
      .then((res) => {
        console.log('Mensaje enviado:', res.data);
        setNuevoMensaje("");
       
      })
      .catch((error) => console.error('Error al enviar mensaje:', error));
  };

  // Funciones para manejar el cupón
  const handleChangeCodigoCupon = (e) => {
    setCodigoCupon(e.target.value);
  };

  const handleAplicarCupon = async () => {
    if (!codigoCupon.trim()) {
      setMensajeCupon("Por favor ingresá un código de cupón.");
      return;
    }
  
    try {
      const res = await API.get(`/cuponesDescuentos/validar/${codigoCupon.trim()}`);
      const cupon = res.data;
  
      if (cupon && cupon.activo) {
        setMensajeCupon(`Cupón "${cupon.nombreCupon}" (${cupon.porcentajeDescuento}%) aplicado con éxito.`);
        setCuponActivo(cupon); // Guardar cupón activo en estado para aplicar descuento
      } else {
        setMensajeCupon("El código de cupón ingresado no es válido o ha expirado.");
        setCuponActivo(null);
      }
    } catch (error) {
      setMensajeCupon("Error al validar el cupón. Intentá nuevamente.");
      setCuponActivo(null);
    }
  };
  
 
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden p-6 px-4">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* Imagen */}
        <div className="w-full sm:w-1/2 flex justify-center">
          {producto.imgUrl ? (
            <img
              src={producto.imgUrl}
              alt={producto.nombre}
              className="w-full max-w-[400px] h-auto object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
              Sin imagen disponible
            </div>
          )}
        </div>

        {/* Detalles */}
        <div className="w-full sm:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">{producto.nombre}</h2>
          
            <p className="text-2xl sm:text-4xl text-green-600 font-semibold mb-6">
              {precioFormateado(producto.precio)}
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mt-6 bg-amber-300 p-2 w-60">Variantes disponibles</h3>
                {variantes.length === 0 ? (
                    <p>no hay disponible</p>
                ) : (
                        <ul>
                            {variantes.map(variante => (
                                <li
                                    key={variante.id}
                                    className={`text-sm pt-2 ${variante.stock === 0 ? 'text-red-600' : 'text-gray-800 text-xl pt-2'}`}>
                                    {variante.nombre} | Precio: ${variante.precio} | stock: {variante.stock} {variante.stock === 0 && '(No disponible)'}
                                    </li>
                            ))}
                        </ul>
                )}
            </div>
           {/* <p className="mb-2 text-base sm:text-lg">
              <strong>{cuotas} cuotas de {precioFormateado(valorCuota)}</strong>
            </p>

            <p className="mb-2 text-sm text-gray-700">
              5% de descuento pagando con Transferencia o depósito bancario
            </p>

            <p className="mb-2 underline text-cyan-700 cursor-pointer hover:text-cyan-900 text-sm">
              Ver más detalles
            </p>

            <p className="mb-4 font-semibold text-sm">Envío gratis superando los $100.000,00</p>

            {/* Código postal 
            <div className="mb-4 flex flex-col">
              <label htmlFor="codigo-postal" className="mb-1 text-sm font-medium text-gray-700">
                Tu código postal
              </label>
              <input
                id="codigo-postal"
                type="text"
                placeholder="Ej: 1406"
                className="w-full max-w-xs p-2 border rounded"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 sm:gap-4 mb-6">
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition w-full sm:w-auto">
                Calcular
              </button>
              <p className="text-sm text-gray-600 cursor-pointer underline hover:text-gray-800">
                No sé mi código postal
              </p>
            </div>*/}
          </div>

          {/* Contador + Agregar
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100 transition">
                -
              </button>
              <span className="text-base font-semibold">1</span>
              <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100 transition">
                +
              </button>
            </div>

            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition w-full sm:w-auto"
              onClick={() => alert("Producto agregado al carrito")}
            >
              Agregar al carrito
            </button>
          </div> 

          <p className="text-center text-sm text-gray-600 border-t pt-4 mt-6">
            ¡Devolvelo gratis! Si no te gustó o no te convence, podés devolverlo cuando quieras.
          </p>*/}

          {/* Entrada para el cupón */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Ingresá el código del cupón"
              value={codigoCupon}
              onChange={handleChangeCodigoCupon}
              className="border p-2 rounded mr-2"
            />
            <button
              onClick={handleAplicarCupon}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Aplicar Cupón
            </button>
            <div className="mt-2 text-sm text-gray-700">{mensajeCupon}</div>
          </div>
        </div>
      </div>

      {/*Mensajes */}
      <div className="mt-10">
        <h2>Mensajes</h2>
        {mensajes.length === 0 ? (
          <p>No hay mensajes para este producto.</p>
        ) : (
          mensajes.map((mensaje) => (
            <div key={mensaje.id}>
              <p>{mensaje.texto}</p>
            </div>
          ))
        )}
      </div>

      {/* Formulario para enviar mensajes */}
      <div className="mt-4">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribí tu mensaje..."
          className="border p-2 rounded mr-2 w-full max-w-md"
        />
        <button
          onClick={enviarMensaje}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2"
        >
          Enviar mensaje
        </button>
          </div>
          
          
    </div>
  );
}
