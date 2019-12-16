const express = require("express");
const posts = require("./posts");

const router = express.Router();

router.use("/posts", posts);
router.use("/comments", posts);

module.exports = router;
