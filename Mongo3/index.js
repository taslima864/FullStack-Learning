const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const app = express();
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats", async (_, res) => {
  const chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/", (_, res) => {
  res.send("root is working");
});

//New Route
app.get("/chats/new", (req, res) => {
  throw new ExpressError(404, "Page not found");
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

//NEW - show route
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    next(new ExpressError(404, "Chat not found"));
  }
  res.render("edit.ejs", { chat });
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;

  await Chat.findByIdAndUpdate(id, { msg }, { runValidators: true });
  res.redirect("/chats");
});

//delete route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
