const divOne = document.createElement('div');
const divTwo = document.createElement('div');

divOne.innerHTML = `
    <div class='w-3/4 h-3/4 border-black border shadow-2xl rounded-3xl bg-purple-700 ' >
        <form class='justify-center items-center h-72 flex flex-col space-x-0 space-y-11'>
        <input type="text" class='border border-black w-3/4 h-10 rounded-xl placeholder-black ps-5' placeholder='titulo ' >
        <input type="text" class='border border-black w-3/4 h-10 rounded-xl placeholder-black ps-5' placeholder='descripción'>
        <label class='text-yellow-50'><input type="checkbox" class =  border'>marca la casilla si esta completado</label>
        </form>
        <div>
        <button type="submit" class = 'my-8 border border-white text-black bg-slate-300 px-10 p-4 relative left-24 w-96 rounded-xl' >escribir</button>
        </div>
</div>`; 
divOne.classList.add('justify-center','flex','w-1/2','flex-row','h-4/5','py-8','my-32')
divTwo.innerHTML = `<h1 class=' my-14 font-black text-4xl font-mono text-red-600'>Tareas </h1>
<div id='lista' class='w-5/6  h-screen' ></div>`
divTwo.classList.add('flex','w-1/2','flex-col','items-center','overflow-y-scroll')


const peticion = async ()=>{
    const pedido = await fetch('http://localhost:4000/tareas');
    const datos = await pedido.json()
    console.log(datos);
    
    const tareas = document.getElementById('lista');
    datos.find(element=>{
        tareas.innerHTML += `<div class='border p-8 m-8 border-blue-800 rounded-xl'>
      <h2 value='${element.id_tareas}' class='font-black font-mono text-3xl' >${element.nombre}</h2>
      <p>${element.descripción}</p>
      <h5>${(element.completadad)?'Completada':'Sin Completar'}</h5>
      <div class='flex my-6 justify-around'><button class='border p-2 rounded-xl text-white bg-orange-700'>Actualizar</button><button class='border p-2 rounded-xl bg-red-900 text-white'>Eliminiar</button></div>
    </div>`
    })
    
}
peticion()

export {divOne,divTwo}