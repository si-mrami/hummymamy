const mongoose = require("mongoose");
// v7c50829SPbKG6s3
mongoose
  .connect(
    "mongodb+srv://simrami1:mrami1902@cluster0.a4bqotb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Db Connected!");
  })
  .catch((err) => {
    throw err;
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("usersHum", newSchema);

module.exports = users;
