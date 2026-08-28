console.log(" web serverni boshlash");
const express = require("express");
const http = require("http");
const app = express();
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  // ✅ Asinxron — fayl o'qish (to'xtamaydi)
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});
// const res = require("express/lib/response");
// 1 KRISH KODLARI
app.use(express.static("public")); // kirib kelayotgan malumotlar uchun faqt public folderi ochiq degan manoni bldradi
app.use(express.json()); // json formatga ogirib beradi
app.use(express.urlencoded({ extended: true })); // Forma ma'lumotlarini o'qish
// SEESIONGA BOGLIQ KODLAR
// 3 VIEWSGA BOGLIQ KODLAR
app.set("views", "views");
app.set("view engine", "ejs");
// 4 ROUTING KODLAR
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background: blue ">HELLO   WORLD</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background: yellow ">siz sovgalar bolimidasz</h1>`);
// });
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "succes" }); //json shalida malumotni qaytarish
});
app.get("/", function (req, res) {
  res.render("harid");
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

//
const server = http.createServer(app);
let PORT = 3005;
server.listen(PORT, function () {
  console.log(`the server is running succesfull on port: ${PORT}`);
});
