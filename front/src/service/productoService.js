import API from './api.js'; 

const productoService = {
  obtenerProductos: async () => {
    const response = await API.get('/productos'); 
    return response.data; 
  },
 
};

export default productoService;
