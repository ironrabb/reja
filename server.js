console.log("web serverni boshlash");
const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://gimmyeongil641_db_user:fZy2iLQKsCFe7tN3@cluster0.wlegmsp.mongodb.net/REJA?retryWrites=true&w=majority";

let db;

MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("mongo db ulandi");
    db = client.db("REJA"); // baza nomi

    const app = require("./app.js");
    const server = http.createServer(app);
<<<<<<< HEAD
    const PORT = 9002; //
=======
    const PORT = 9002; // 
>>>>>>> f1bd143a6a76876a149f79061ca30cb1af6ed356

    server.listen(PORT, function () {
      console.log(
        `the server is running succesfully on port: ${PORT}, http://localhost:${PORT}`,
      );
    });
  })
  .catch((err) => {
    console.log("error on connection mongo db:", err);
  });

module.exports = { getDb: () => db };
