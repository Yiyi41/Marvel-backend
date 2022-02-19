const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/characters", async (req, res) => {
  const name = req.query.name;
  const limit = req.query.limit; //20;
  const page = req.query.page;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${
        process.env.MARVEL_API_KEY
      }&name=${name}&skip=${(page - 1) * limit}&limit=${limit}`
    );
    const dataCharacters = response.data;
    // console.log(response.data);

    res.json(dataCharacters);
  } catch (error) {
    console.log(error.response);
  }
});

module.exports = router;
