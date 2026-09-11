console.log(" web serverni boshlash");
const express = require("express");
const { ObjectId } = require("mongodb");
const app = express();
const fs = require("fs");
let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

const db = require("./server.js").getDb();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", async (req, res) => {
  const new_reja = req.body.reja;
  try {
    const result = await db.collection("plans").insertOne({ reja: new_reja });
    res.json({ _id: result.insertedId, reja: new_reja });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "somthing went wrong" });
  }
});

app.post("/delete-item", async (req, res) => {
  const id = req.body.id;
  try {
    const result = await db
      .collection("plans")
      .deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "somthing went wrong" });
  }
});

app.post("/edit-item", async (req, res) => {
  const id = req.body.id;
  const new_reja = req.body.reja;
  try {
    const result = await db
      .collection("plans")
      .updateOne({ _id: new ObjectId(id) }, { $set: { reja: new_reja } });
    res.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "somthing went wrong" });
  }
});

app.post("/delete-all", async (req, res) => {
  try {
    const result = await db.collection("plans").deleteMany({});
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "somthing went wrong" });
  }
});

app.get("/", async (req, res) => {
  console.log("user enterred /");
  try {
    const data = await db.collection("plans").find().toArray();
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
