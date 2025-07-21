import { MejorValorado } from "../models";

export const votarProductos = async (req, res) => {
    const { productoId } = req.params;

    try {
        let registro = await MejorValorado.findOne({ where: { productoId } });
        if (registro) {
            registro.cantidadVotos++;
            await registro.save()
        } else {
            registro = await MejorValorado.create({productoId, cantidadVotos: 1})
        }
        return res.status(200).json(registro); 
    } catch (error) {
         res.status(500).json({ error: 'Error ' });
    }
};


export const obtenerMejorValorados = async (req, res) => {
  try {
      const mejorValorados = await MejorValorado.findAll({
          order: [['cantidadVotos', 'DESC']],
      });
   return res.status(200).json(mejorValorados);
  } catch (error) {
    res.status(500).json({ error: "Error." });
  }
};