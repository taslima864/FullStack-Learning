const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/college");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndUpdate({name: "Will"}, {age: 25}, {new: true})
.then((res) => {
  console.log(res);
}).catch((err) =>{
  console.log(err);
});

