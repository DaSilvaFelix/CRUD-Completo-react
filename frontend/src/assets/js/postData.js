export const postData = async (a, b, c) => {
  try {
    const post = await fetch("http://localhost:4000/tareas", {
      method: "POST",
      body: JSON.stringify({ nombre: a, descripcion: b, completada: c }),
      headers: { "Content-Type": "application/json" },
    });
    const respuesta = await post.json();
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
