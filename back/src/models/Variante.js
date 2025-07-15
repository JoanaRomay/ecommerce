import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Variante = sequelize.define('Variante', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'variantes',
  timestamps: false
});

export default Variante;
