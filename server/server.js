const express = require("express");
const postsRouter = require("./api/posts");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use("/api", postsRouter);

app.listen(port, () => {
  console.log(`✔ Listening on : http://localhost:${port}`);
});
