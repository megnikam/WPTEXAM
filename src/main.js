const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const { getrecord, addrecord } = require("./user");
//http://localhost:4000/users
app.get("/users", async (req, res) => {
  const list = await getrecord();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user1 = req.body;
  await addrecord(user1);
  res.json({ msg: "user added successfully" });
});

app.listen(4000, () => console.log("Server Started"));
