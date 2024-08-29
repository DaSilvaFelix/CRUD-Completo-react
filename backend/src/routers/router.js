import { Router } from "express";
import {
  eliminarTarea,
  recibirTareas,
  traerTareas,
  traerTareasById,
} from "../controllers/tacks.controllers.js";

const router = Router();
router.get("/tareas", traerTareas);
router.post("/tareas", recibirTareas);
router.delete("/tareas/:id", eliminarTarea);
router.get("/tareas/:id", traerTareasById);

export { router };
