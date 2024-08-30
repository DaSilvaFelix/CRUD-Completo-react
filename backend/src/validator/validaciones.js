import { body } from "express-validator";

const validaciones = [
    body("nombre")
    .isString().withMessage('el nombre debe ser una cadena de caracteres')
    .isLength({min:3, max:30}).withMessage('el nombre debe tener como minimo 3 caractere')
    .notEmpty().withMessage('el nombr es obligatorio'),

    body('descripción')
    .notEmpty().withMessage('una descripcion es obligartoria')
    .isString().withMessage('la descripción debe contener solo texto'),

    body('completadad')
    .notEmpty().withMessage('el campo de cumplimiento no debe estar vacio')
    .isBoolean().withMessage('el campo debe contener valore de true o false'),
]

export {validaciones}