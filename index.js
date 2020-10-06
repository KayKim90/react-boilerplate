const express = require("express");
const app = express();

const port = 5000;

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

//mongodb+srv://kay:<password>@react-template.j8mi6.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
//DATABASE=mongodb+srv://kay:<PASSWORD>@cluster0-j8mi6.mongodb.net/online-study?retryWrites=true&w=majority
//3XDiAlqgt26KE4RD

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
