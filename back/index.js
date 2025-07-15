import express from 'express';
import cors from 'cors';
import { sequelize, Categoria, Producto, Orden, DetalleOrden } from '../back/src/models/index.js';
import router from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Configurá CORS para permitir tu frontend (puerto 5173 o el que uses)
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function(origin, callback) {
    
        
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());


app.use('/img', express.static('public/img'));
app.use('/api', router);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    await sequelize.sync({ alter: true });
    console.log('🔁 Tablas revisadas y sincronizadas correctamente.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

startServer();
