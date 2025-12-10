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

User.findById("6939804fd99e5e54eaf4cf5a")
.then((res) =>{
  console.log(res);

})
.catch((err)=>{
  console.log(err);
});

// User.insertMany([
//   { name: "Mike", email: "mike@yahoo.com", age: 25 },
//   { name: "Eleven", email: "el@yahoo.com", age: 22 },
//   { name: "Will", email: "will@yahoo.com", age: 23 },
// ]).then((res) => {
//   console.log(res);
// });