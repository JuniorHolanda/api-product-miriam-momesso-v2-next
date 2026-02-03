import mongoose from "mongoose";

export default async function connectDb() {
    mongoose.connect(process.env.DB_CONNECTION_STRING!)
    const db = mongoose.connection;
    mongoose.connection.on('connected', () => {
      console.log("Banco conectado:", mongoose.connection.name);
});

  db.on("error", (error) => {
    console.error("Erro na conexão com MongoDB:", error);
  });

  db.once("open", () => {
    console.log("Conexão com MongoDB estabelecida com sucesso!");
  });

  return db;
}