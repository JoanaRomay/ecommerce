import Footer from "../components/Footer";
export default function Contacto() {
    return (
        <>
      <div className="flex justify-center p-6 mt-10">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl lg:max-w-4xl p-8 lg:p-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Contactanos
          </h2>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label htmlFor="nombre" className="block text-gray-700 font-medium mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tu nombre"
              />
            </div>
  
            <div className="col-span-1">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="tu@email.com"
              />
            </div>
  
            <div className="col-span-1 lg:col-span-2">
              <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
  
            <div className="col-span-1 lg:col-span-2">
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
            </div>
        <Footer/>
        </>
    );
  }
  