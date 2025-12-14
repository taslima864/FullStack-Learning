const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/chats", async (_, res) => {
  const chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/", (_, res) => {
  res.send("root is working");
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new Chat({
    from,
    to,
    msg,
    created_at: new Date(),
  });

  newChat.save().then(() => {
    console.log("Saved:", newChat);
    res.redirect("/chats");
  });
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});


app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
