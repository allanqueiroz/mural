const express = require("express");
const app = express();
const PORT = 5000;
const postsRouter = require("./routes/posts");
const path = require("path");

app.use(express.json());
app.use("/api", postsRouter);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
