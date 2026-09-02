console.log(" web serverni boshlash");
const express = require("express");

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
// MONGO DB CHAQIRISH
const db = require("./server.js").getDb(); // ✅ TO'G'RI
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
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   // res.json({ test: "succes" }); //json shalida malumotni qaytarish
//   const new_reja = req.body.reja;
//   db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end("somthing went wrong");
//     } else {
//       res.end("succesfully added");
//     }
//   });
// });
app.post("/create-item", async (req, res) => {
  console.log("user enterred /create item");
  const new_reja = req.body.reja;

  try {
    const result = await db.collection("plans").insertOne({ reja: new_reja });
    console.log(result);

    res.json({
      success: true,
      insertedId: result.insertedId, // yangi qo'shilgan yozuvning ID'si
      reja: new_reja,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "somthing went wrong" });
  }
});
// app.get("/", function (req, res) {
//   db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("something went wrong");
//       } else {
//         console.log(data);
//         res.render("reja");
//       }
//     });
//   res.render("reja");
// });
app.get("/", async (req, res) => {
  console.log("user enterred /");
  try {
    const data = await db.collection("plans").find().toArray();
    // console.log(data);
    res.render("reja", { items: data });
  } catch (err) {
    console.log(err);
    res.end("something went wrong");
  }
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
