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

export default router;

/*ana@DESKTOP-DA6GC1P MINGW64 ~/Desktop/ecommerce/back (master)
$ npm run dev

> back@1.0.0 dev      
> nodemon src/index.js

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`   
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json 
[nodemon] starting `node src/index.js index.js`
file:///C:/Users/Joana/Desktop/ecommerce/back/src/routes/mejorValorado.routes.js:3
    votarProducto,
    ^^^^^^^^^^^^^
SyntaxError: The requested module '../controllers/mejorValoradoController.js' does not provide an export named 'votarProducto'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:146:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:229:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

Node.js v20.18.0
[nodemon] app crashed - waiting for file changes before starting... */