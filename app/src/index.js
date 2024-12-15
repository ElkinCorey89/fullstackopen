import express from "express";
import dotenv from "dotenv";
import connection from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Prueba de conexión a MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL:", err);
    process.exit(1);
  }
  console.log("Conexión exitosa a MySQL");
});

// Rutas
app.get("/", (req, res) => {
  res.send("¡Servidor Node.js con MySQL y Docker funcionando correctamente!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
