const express = require("express");
const router = express.Router();

const { Divers } = require("../models");
const paginate = require("jw-paginate");

router.get("/", async (req, res) => {
  const divers = await Divers.findAll();

  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1;

  // get pager object for specified page
  const pageSize = 4;
  const pager = paginate(divers.length, page, pageSize);

  // get page of items from items array
  const pageOfItems = divers
    .slice(0)
    .reverse()
    .slice(pager.startIndex, pager.endIndex + 1);

  // return pager object and current page of items

  return res.json({ pager, pageOfItems });
});

router.delete("/", async (req, res) => {
  const id = req.body.source;

  Divers.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.json("deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/", async (req, res) => {
  const instructor = req.body.instructor;
  const id = req.body.id;

  Divers.update({ instructor: instructor }, { where: { id: id } })
    .then(() => {
      res.json("deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", async (req, res) => {
  const values = req.body.diver;

  const createDiver = await Divers.create(values)
    .then(() => {
      res.json(createDiver);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
