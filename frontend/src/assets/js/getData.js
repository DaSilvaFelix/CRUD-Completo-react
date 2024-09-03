import { peticion } from "./getTasks";
import { postData } from "./postData";

export const getData = (b) => {
  b.addEventListener("click", async () => {
    const nombre = document.getElementById("nombre");
    const descripcion = document.getElementById("descripcion");
    const completada = document.getElementById("valor");
    await postData(nombre.value, descripcion.value, completada.checked);
    await peticion();
  });
};
