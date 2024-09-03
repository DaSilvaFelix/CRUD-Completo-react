import { Router } from "express";
import {
  actualizarTareas,
  eliminarTarea,
  recibirTareas,
  traerTareas,
  traerTareasById,
} from "../controllers/tacks.controllers.js";
import { validaciones } from "../validator/validaciones.js";
import { aplicarValidador } from "../middleware/validador.js";

const router = Router();
router.get("/tareas", traerTareas);
router.post("/tareas", validaciones, aplicarValidador, recibirTareas);
router.delete("/tareas/:id", eliminarTarea);
router.get("/tareas/:id", traerTareasById);
router.put("/tareas/:id", validaciones, aplicarValidador, actualizarTareas);

export { router };
