const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/comics/:characterId", async () => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.MARVEL_API_KEY}`
    );
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
