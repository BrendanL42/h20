const express = require("express");
const router = express.Router();

const { Divers } = require("../models");



router.put("/", async (req, res) => {
    const id = req.body.id;
  
    Divers.update({ instructor: "" }, { where: { id: id } })
      .then(() => {
        res.json("deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });


module.exports = router;