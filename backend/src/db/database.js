import mysql from "mysql2/promise";

const conexion = async () => {
  try {
    return await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "tareas",
    });
  } catch (error) {
    console.log(error);
    console.log("error al conecatr el servidor con la base de datos");
  }
};

export { conexion };
