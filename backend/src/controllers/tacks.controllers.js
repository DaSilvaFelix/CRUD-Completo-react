import { conexion } from "../db/database.js";

const traerTareas = async (req, res) => {
  try {
    const conectado = await conexion();
    const sql = "SELECT * FROM `tareas`";
    const [resultados] = await conectado.query(sql);
    res.json(resultados);
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: "error al traer las tareas del servidor ",
    });
  }
};

const recibirTareas = async (req, res) => {
  const { nombre, descripcion, completada } = req.body;
  const conectado = await conexion();
  const sql =
    "INSERT INTO `tareas`(`nombre`, `descripción`, `completadad`) VALUES (?,?,?)";
  const [resultado] = await conectado.query(sql, [
    nombre,
    descripcion,
    completada,
  ]);
  const mensaje = !resultado
    ? "la tarea no se creo correctamente"
    : "tarea creada correctament";
  res.json({
    mensaje,
  });
};

const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const conectado = await conexion();
    const sql = "SELECT * FROM `tareas` WHERE id_tareas = ?";
    const [resultado] = await conectado.query(sql, id);
    if (resultado.length === 0) {
      res.json({ mensaje: "no existe la tarea para eliminarla" });
    } else {
      const sql2 = "DELETE FROM `tareas` WHERE id_tareas = ?";
      await conectado.query(sql2, id);
      res.json({ mensaje: "tarea eliminada correctamente" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: "error al eliminar la tarea del servidor ",
    });
  }
};

const traerTareasById = async (req, res) => {
  try {
    const { id } = req.params;
    const conectado = await conexion();
    const sql = "SELECT * FROM `tareas` WHERE id_tareas = ?";
    const [resultado] = await conectado.query(sql, id);
    if (resultado.length === 0) {
      res.json({
        mensaje: "tarea no encontradad",
      });
    } else {
      res.json(resultado[0]);
    }
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: "error al traer la tarea",
    });
  }
};

const actualizarTareas = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, completada } = req.body;
    const conectado = await conexion();
    const sql = "SELECT * FROM `tareas`WHERE id_tareas = ?";
    const [resultado] = await conectado.query(sql, id);
    if (resultado.length === 0) {
      return res.status(400).json({
        msg: "no hay tereas para actualizar el valor",
      });
    } else {
      const sql2 =
        "UPDATE `tareas` SET `nombre`=?,`descripción`=?,`completadad`=? WHERE `id_tareas`=?";
      const [resultado2] = await conectado.query(sql2, [
        nombre,
        descripcion,
        completada,
        id,
      ]);
      if (!resultado2) {
        res.status(400).json("error en la actualizacion");
      } else {
        res.json({
          msg: "tarea actualizada correctamente",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  traerTareas,
  recibirTareas,
  eliminarTarea,
  traerTareasById,
  actualizarTareas,
};
