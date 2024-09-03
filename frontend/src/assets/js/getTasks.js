export const peticion = async () => {
  const pedido = await fetch("http://localhost:4000/tareas");
  const datos = await pedido.json();
  console.log(datos);
  const tareas = document.getElementById("lista");
  tareas.innerHTML = "";
  datos.forEach((element) => {
    tareas.innerHTML += `<div class='border p-8 m-8 border-blue-800 rounded-xl'>
        <h2 class='font-black font-mono text-3xl' >${element.nombre}</h2>
        <p>${element.descripción}</p>
        <h5>${element.completadad ? "Completada" : "Sin Completar"}</h5>
        <div class='flex my-6 justify-around'>
        <button class='border p-2 rounded-xl text-white bg-orange-700'>Actualizar</button>
        <button id='btn-${
          element.id_tareas
        }' class='border p-2 rounded-xl bg-red-900 text-white'>Eliminar</button>
        </div>
      </div>`;
  });
  datos.forEach((element) => {
    const botonEliminar = document.getElementById(`btn-${element.id_tareas}`);
    botonEliminar.addEventListener("click", async () => {
      const eliminacion = await fetch(
        `http://localhost:4000/tareas/${element.id_tareas}`,
        { method: "DELETE" }
      );
      const confirmacion = await eliminacion.json();
      console.log(confirmacion);
      peticion();
    });
  });
};
