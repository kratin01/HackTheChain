import express from "express";
import dotenv from "dotenv";
import dbConnect from "./src/DB/index.js";
import app from "./src/app.js";

try {
  dotenv.config({
    path: "./.env",
  });

  console.log("Environment variables loaded successfully");
} catch (error) {
  console.error("Error loading .env file:", error);
}

app.get("/", (req, res) => {
  res.send("Radhey Radhey!");
});

dbConnect()
  .then(() => {
    app.listen(process.env.SERVER_PORT || 3000, () =>
      console.log(`Your server is running on port ${process.env.SERVER_PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  }); //async await returns promise so we can use then and catch
