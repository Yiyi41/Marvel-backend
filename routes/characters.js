const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    const dataCharacters = response.data;
    console.log(response.data);
    // let nombreElementParPage=5;
    // let nombreElementApasser=0;

    //   .limit(nombreElementParPage)
    //   .skip(nombreElementApasser);

    res.json(dataCharacters);
  } catch (error) {
    console.log(error.response);
  }
});

module.exports = router;
