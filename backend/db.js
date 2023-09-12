const mongoose = require("mongoose");

const url ="mongodb+srv://hiteshchouhan5378:Wnq9ucCiuDbU8FKV@cluster0.z2ezcgt.mongodb.net/?retryWrites=true&w=majority"
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
