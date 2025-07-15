import Cliente from '../models/Cliente.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes.' });
  }
};

// Obtener un cliente por ID
export const getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado.' });

    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el cliente.' });
  }
};

// Crear nuevo cliente
export const createCliente = async (req, res) => {
  const { nombre, email, contraseña } = req.body;
  try {
    // Validar email único
    const existente = await Cliente.findOne({ where: { email } });
    if (existente) return res.status(400).json({ error: 'El email ya está registrado.' });

    const nuevoCliente = await Cliente.create({ nombre, email, contraseña });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el cliente.' });
  }
};

// Actualizar un cliente
export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, contraseña } = req.body;

  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado.' });

    // Validar si se quiere cambiar el email y que no esté repetido
    if (email && email !== cliente.email) {
      const existente = await Cliente.findOne({ where: { email } });
      if (existente) return res.status(400).json({ error: 'Ese email ya está en uso.' });
    }

    await cliente.update({
      nombre: nombre ?? cliente.nombre,
      email: email ?? cliente.email,
      contraseña: contraseña ?? cliente.contraseña
    });

    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el cliente.' });
  }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado.' });

    await cliente.destroy();
    res.json({ mensaje: 'Cliente eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cliente.' });
  }
};