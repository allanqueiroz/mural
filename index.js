const express = require("express");
const app = express();
const PORT = 5000;
const postsRouter = require("./routes/posts");

app.use(express.json());

app.use("/api", postsRouter);
app.use("/", express.static(`${__dirname}/public`));

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
