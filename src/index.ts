import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at https://usmc.up.railway.app/`);
});

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.sendFile('./src/home.html');
});
app.get('/login', (req, res) => {
  res.sendFile('./src/login.html');
});
app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

