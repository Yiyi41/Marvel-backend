const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/comics/:characterId", async (req, res) => {
  const id = req.params.characterId; //c'est une requête en params: je recois la requête du front avec l'id précis, l'id est récupéré avec req.params
  console.log(id);
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    // console.log(response.data);
    res.json(response.data); //je renvoie la réponse à mon front
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
