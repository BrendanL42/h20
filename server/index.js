const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

app.use(express.json());
app.use(cors());




const db = require("./models");


//routes
const update = require("./routes/update");
const divers = require("./routes/divers");
const login = require("./routes/log-in");

app.use("/update", update);
app.use("/divers", divers);
app.use("/login", login);


db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("Your server is running on port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.post("/", (req, res) => {
//   console.log(req.body.diver);
//   const name = "Brendan Little";
//   const bcd = "Large";

//   db.query(
//     "INSERT INTO diver (name, bcd) VALUES (?,?)",
//     [name, bcd],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("success");
//       }
//     }
//   );
// });
