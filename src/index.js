require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const Controller = require("./controllers");

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONT],
  })
);

app.get("/catalogue-services", async (req, res) => {
  // Path is static and file will be available
  const path = __dirname + "/data/services.csv";
  Controller.Services.getServices(path)
    .then(data => res.json(data))
    .catch(error => res.status(500).json(error));
});

app.listen((port = process.env.PORT), () => console.log(`App listening at http://localhost:${port}`));
