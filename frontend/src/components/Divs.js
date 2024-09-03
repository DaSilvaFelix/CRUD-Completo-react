import { peticion } from "../assets/js/getTasks";
const divOne = document.createElement("div");
const divTwo = document.createElement("div");
divOne.innerHTML = `
    <div class='bg-indigo-500 w-3/4 rounded-3xl flex justify-center flex-col h-4/5 ' >
        <form class='flex flex-col h-4/6 w-full justify-evenly items-center'>
        <input type="text" id='nombre' class='border border-black w-3/4 h-10 rounded-xl placeholder-black ps-5' placeholder='titulo ' >
        <input type="text" id='descripcion' class='border border-black w-3/4 h-10 rounded-xl placeholder-black ps-5' placeholder='descripción'>
        <label class='text-emerald-50'><input type="checkbox" id='valor'>marca la casilla si esta completado</label>
        </form>
        <div class='flex justify-center '>
        <button id='enviar' class='border px-24 py-4 rounded-full bg-lime-200 text-black hover:text-blue-600 hover:bg-neutral-100 transition-all' >escribir</button>
        </div>
</div>`;
divOne.classList.add(
  "justify-center",
  "flex",
  "w-1/2",
  "flex-row",
  "h-4/5",
  "py-8",
  "my-32",
  "items-start"
);
divTwo.innerHTML = `<h1 class=' my-14 font-black text-4xl font-mono text-red-600'>Tareas </h1>
<div id='lista' class='w-5/6  h-screen' ></div>`;
divTwo.classList.add(
  "flex",
  "w-1/2",
  "flex-col",
  "items-center",
  "overflow-y-scroll"
);

peticion();

export { divOne, divTwo };
