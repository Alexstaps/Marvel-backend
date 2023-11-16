require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
	try {
		const { limit, skip, name } = req.query;

		let url = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`;

		if (limit && (limit > 0 || limit <= 100)) {
			url += `&limit=${limit}`; // j'affiche l'url avec ma query limit et sa valeur
		}

		//si le skip existe  et qu'il est supérieur à 0 et que c'est un nombre entier
		if (skip && skip > 0) {
			url += `&skip=${skip}`;
		}

		if (name) {
			url += `&name=${name}`;
		}

		const response = await axios.get(url);
		console.log(response.data);
		res.json(response.data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
