import express from "express";
const app = express();
const port = 3000;

app.get("/api/test", (req, res) => {
  console.log("Hello");
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
