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
  const { nombre, descripción, completadad } = req.body;
  const conectado = await conexion();
  const sql =
    "INSERT INTO `tareas`(`nombre`, `descripción`, `completadad`) VALUES (?,?,?)";
  const [resultado] = await conectado.query(sql, [
    nombre,
    descripción,
    completadad,
  ]);
  const mensaje = !resultado
    ? "la tarea no se creo correctamente"
    : "tarea creada correctament";
  res.json({
    mensaje,
  });
};

const eliminarTarea = async (req, res) => {
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
};

export { traerTareas, recibirTareas, eliminarTarea };
