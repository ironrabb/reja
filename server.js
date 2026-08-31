// console.log("heyy");
// const http = require("http");
// const mongodb = require("mongodb");

// // mongo db ulash fZy2iLQKsCFe7tN3
// let db;
// const connectionString =
//   "mongodb+srv://gimmyeongil641_db_user:fZy2iLQKsCFe7tN3@cluster0.wlegmsp.mongodb.net/?appName=Cluster0";
// console.log(JSON.stringify(connectionString));
// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) {
//       console.log("error on connection mongo db:", err); // to'liq xato matni
//     } else {
//       console.log("mongo db ulanmoqda");
//       db = client.db("REJA");

//       const app = require("./app.js");
//       const server = http.createServer(app);
//       let PORT = 3010;
//       server.listen(PORT, function () {
//         console.log(
//           `the server is running succesfull on port: ${PORT}, http://localhost:${PORT}`,
//         );
//       });
//     }
//   },
// );

console.log("heyy");
const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://gimmyeongil641_db_user:fZy2iLQKsCFe7tN3@cluster0.wlegmsp.mongodb.net/REJA";

const client = new MongoClient(connectionString);

let db;

client
  .connect()
  .then(() => {
    console.log("mongo db ulandi");
    // console.log(client);
    db = client.db("REJA"); // baza nomi

    const app = require("./app.js");
    const server = http.createServer(app);
    let PORT = 3010;
    server.listen(PORT, function () {
      console.log(
        `the server is running succesfull on port: ${PORT}, http://localhost:${PORT}`,
      );
    });
  })
  .catch((err) => {
    console.log("error on connection mongo db:", err);
  });
module.exports = { getDb: () => db };
// module.exports = client;
