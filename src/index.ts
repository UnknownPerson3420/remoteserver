import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.send("Testing123);
});

app.listen(port, () => {
  console.log(`Example app listening at https://expressjs-production-9521.up.railway.app/`);
});
