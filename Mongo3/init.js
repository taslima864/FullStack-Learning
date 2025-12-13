const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  { from: "neha", to: "priya", msg: "Hi!!!", created_at: new Date() },
  { from: "kaif", to: "saif", msg: "teach me js", created_at: new Date() },
  { from: "mohit", to: "rohit", msg: "Good luck", created_at: new Date() },
  {
    from: "Taslima",
    to: "Priyanka",
    msg: "Go to heaven!!!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
