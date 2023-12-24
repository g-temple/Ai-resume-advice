import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const app = express();
const port = 8080;
import { main } from "./openai.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Return root page

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

// Run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Receive a request from the server
app.get("/search", async function (req, res) {
  var sentStuff = req.query.word; // data sent from the form needs to be processed using
  // openAI's api functions

  // call the openAI API
  var response = await main(sentStuff);

  // send it back to the client

  res.setHeader("Content-Type", "application/json");
  res.json(response);
});
