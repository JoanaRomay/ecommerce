import { Router } from 'express';
import carritoRoutes from './carritos.routes.js'; 
import categoriaRoutes from './categorias.routes.js';
import detalleOrdenRoutes from './detallesOrdenes.routes.js';
import ordenRoutes from './ordenes.routes.js';
import productoRoutes from './productos.routes.js';
import mensajesRoutes from './mensajes.routes.js';
import clienteRoutes from './clientes.routes.js';
import carritoProductoRoutes from './carritoXProducto.routes.js';
import administradorRoutes from './administrador.routes.js'
import cuponDescuento from './cuponDescuento.routes.js'
import variantesRoutes from './variante.route.js'

const router = Router();

router.use('/categorias', categoriaRoutes);
router.use('/carritos', carritoRoutes);
router.use('/productos', productoRoutes);
router.use('/ordenes', ordenRoutes);
router.use('/detallesordenes', detalleOrdenRoutes);
router.use('/mensajes', mensajesRoutes);
router.use('/clientes', clienteRoutes);
router.use('/carritosproductos', carritoProductoRoutes);
router.use('/administradores', administradorRoutes);
router.use('/cuponesDescuentos', cuponDescuento);
router.use('/',variantesRoutes)

export default router;
