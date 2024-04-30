const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("I am in the questions route");
});

router.get("/:id", (req, res) => {
  res.send(req.params);
});

module.exports = router;
