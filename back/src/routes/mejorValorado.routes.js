import { Router } from 'express';
import {
    votarProducto,
    obtenerMejorValorados
} from '../controllers/mejorValoradoController.js';

const router = Router();

//get
router.get('/mejor-valorados', obtenerMejorValorados)

//post
router.post('/productos/:productoId/votar', votarProducto);

export default router