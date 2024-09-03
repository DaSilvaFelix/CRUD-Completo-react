import { validationResult } from "express-validator";

const aplicarValidador = (req, res, next) => {
  const errores = validationResult(req);

  // Verifica si hay errores usando el método isEmpty()
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }

  next();
};

export { aplicarValidador };
