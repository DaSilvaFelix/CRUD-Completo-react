const divOne = document.createElement('div');
const divTwo = document.createElement('div');

divOne.innerHTML = `
    <div class='w-3/4 h-1/2 border-black border shadow-2xl rounded-3xl bg-purple-700 ' >
        <form class='justify-center items-center h-72 flex flex-col space-x-0 space-y-11 '>
        <input type="text" class='border border-black w-3/4 h-10 rounded-xl placeholder-black ps-5' placeholder='titulo ' >
        <input type="text" class='border border-black w-3/4 h-10 rounded-xl placeholder-black ps-5' placeholder='descripción'>
        <input type="checkbox" name="" id="" class = 'border-black border self-baseline relative left-24 '>
        </form>
        <div>
        <button type="submit" class = 'border border-white text-black bg-slate-300 px-10 p-4 relative left-24 w-96 rounded-xl' >escribir</button>
        </div>
</div>`; 
divOne.classList.add('justify-items-center','justify-center','flex','w-1/2','flex-row','items-center')
divTwo.innerHTML = `<h1>Tareas <h1>`
divTwo.classList.add('flex','w-1/2','flex-col')

export {divOne,divTwo}