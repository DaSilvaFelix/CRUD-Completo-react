import { Router } from "express";
import {
  eliminarTarea,
  recibirTareas,
  traerTareas,
} from "../controllers/tacks.controllers.js";

const router = Router();
router.get("/tareas", traerTareas);
router.post("/tareas", recibirTareas);
router.delete("/tareas/:id", eliminarTarea);

export { router };
