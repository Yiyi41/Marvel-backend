const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(cors());
//eo5LCjqcMmJ34ZlU

//import des routes
const comics = require("./routes/comics");
app.use(comics);

const characters = require("./routes/characters");
app.use(characters);

const comicsOfCharacter = require("./routes/comicsOfCharacter");
app.use(comicsOfCharacter);

// app.get("/comics", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=eo5LCjqcMmJ34ZlU"
//     );
//     const dataComics = response.data;

//     res.json(dataComics);
//   } catch (error) {
//     console.log(error.response);
//   }
// });

// app.get("/characters", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=eo5LCjqcMmJ34ZlU"
//     );
//     const dataCharacters = response.data;
//     res.json(dataCharacters);
//   } catch (error) {
//     console.log(error.response);
//   }
// });

app.listen(process.env.PORT, () => {
  console.log("server started!");
});
