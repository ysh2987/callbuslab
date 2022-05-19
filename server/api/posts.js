const express = require("express");
const data = require("../data/posts");

const posts = [...data];
const postsRouter = express.Router();

// GET
postsRouter.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

module.exports = postsRouter;
