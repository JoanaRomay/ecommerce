import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import NavBar from "../components/NavBar";
import ProductoDetalle from "../components/ProductoDetalle";


    
const AppRoutes = () => {
    return (
        <>
           <NavBar />
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/productos/:id" element={<ProductoDetalle />} />

            </Routes>

        </>
     
    );
  };
  
  export default AppRoutes;
