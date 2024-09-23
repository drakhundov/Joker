const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 4040;

app.use(express.json());
app.use(cors());

app.get("/getJoke", (req, res) => {
  const q = req.query;
  const params = Object.keys(q).join(",");
  const APIURL = `https://v2.jokeapi.dev/joke/${params}`;
  console.log(`[LOG] Fetching from ${APIURL}`);
  fetch(APIURL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const { setup, delivery, flags } = json;
      const joke = { setup, punchline: delivery, flags };
      res.json(joke);
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      res.status(500).json({ error: "Failed to fetch joke" }); // Send an error response
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
