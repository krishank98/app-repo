const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  const hash = await bcrypt.hash("secret123", 10);
  const valid = await bcrypt.compare(password, hash);

  if (!valid) {
    return res.status(401).json({ error: "Invalid login" });
  }

  res.json({ message: "Login successful" });
});

module.exports = app;
