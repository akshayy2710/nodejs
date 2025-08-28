import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Library  running..");
});

app.listen(9090, () => console.log("Server running on port 9090 (http://localhost:9090/)"));
