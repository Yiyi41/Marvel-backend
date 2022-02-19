const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/comics", async (req, res) => {
  const title = req.query.title;
  const limit = req.query.limit; //20;
  const page = req.query.page;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${
        process.env.MARVEL_API_KEY
      }&title=${title}&skip=${(page - 1) * limit}&limit=${limit}`
    );
    const dataComics = response.data;

    res.json(dataComics);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
