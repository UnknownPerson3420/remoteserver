import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.sendFile('home.html');
});
app.get('/login', (req, res) => {
  res.sendFile('login.html');
});
app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});
app.listen(port, () => {
  console.log(`Example app listening at https://usmc.up.railway.app/`);
});
