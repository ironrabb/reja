console.log(" web serverni boshlash");
const express = require("express");
const http = require("http");
const app = express();

// 1 KRISH KODLARI
app.use(express.static("public")); // kirib kelayotgan malumotlar uchun faqt public folderi ochiq degan manoni bldradi
app.use(express.json()); // json formatga ogirib beradi
app.use(express.urlencoded({ extended: true }));
// SEESIONGA BOGLIQ KODLAR
// 3 VIEWSGA BOGLIQ KODLAR
app.set("views", "views");
app.set("view ejs", "ejs");
// 4 ROUTING KODLAR
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: blue ">HELLO   WORLD</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="background: yellow ">siz sovgalar bolimidasz</h1>`);
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running succesfull on port: ${PORT}`);
});
