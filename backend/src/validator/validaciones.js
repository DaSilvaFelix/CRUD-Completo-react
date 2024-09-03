import { body } from "express-validator";

const validaciones = [
  body("nombre")
    .isString()
    .withMessage("El nombre debe ser una cadena de caracteres.")
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre debe tener entre 3 y 30 caracteres.")
    .notEmpty()
    .withMessage("El nombre es obligatorio."),

  body("descripcion")
    .isString()
    .withMessage("La descripción debe ser una cadena de texto.")
    .isLength({ min: 5, max: 200 })
    .withMessage("La descripción debe tener entre 5 y 200 caracteres.")
    .notEmpty()
    .withMessage("La descripción es obligatoria."),

  body("completada")
    .notEmpty()
    .withMessage("El campo de cumplimiento es obligatorio.")
    .isBoolean()
    .withMessage("El campo debe ser un valor booleano (true o false)."),
];

export { validaciones };
