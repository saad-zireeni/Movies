const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// API endpoint to fetch a list of movies
app.get("/movies", (req, res) => {
  axios
    .get("https://api.themoviedb.org/3/movie/550?", {
      params: {
        api_key: "f7c60082eff916bf6b71057813e68f3c",
      },
    })
    .then((response) => {
      const movies = response.data;
      res.json(movies);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch movies" });
    });
});

// API endpoint to fetch a list of genres
app.get("/genres", (req, res) => {
  axios
    .get("https://api.themoviedb.org/3/movie/550?", {
      params: {
        api_key: "f7c60082eff916bf6b71057813e68f3c",
      },
    })
    .then((response) => {
      const genres = response.data;
      res.json(genres);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch genres" });
    });
});

// API endpoint to fetch details of a specific movie
app.get("/movies/:movieId", (req, res) => {
  const { movieId } = req.params;

  axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: "f7c60082eff916bf6b71057813e68f3c",
      },
    })
    .then((response) => {
      const movie = response.data;
      res.json(movie);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch movie details" });
    });
});
