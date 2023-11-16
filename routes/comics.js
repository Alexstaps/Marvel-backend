require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
	try {
		const { limit, skip, title } = req.query; //destructure les query

		let url = `https://lereacteur-marvel-api.herokuapp.com/comics?&apiKey=${process.env.MARVEL_API_KEY}`; // met en variable l'url pour pouvoir le réutiliser dans mes conditions.

		//si le query s'il existe et s'il compris entre 1 et 100
		if (limit && (limit > 0 || limit <= 100)) {
			url += `&limit=${limit}`; // j'affiche l'url avec ma query limit et sa valeur
		}

		//si le skip existe  et qu'il est supérieur à 0 et que c'est un nombre entier
		if (skip && skip > 0) {
			url += `&skip=${skip}`;
		}

		if (title) {
			url += `&titlte=${title}`;
		}

		const response = await axios.get(url);

		console.log(url, response.data.results.length);
		// console.log(response.data);
		res.json(response.data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.get("/comics/:characterId", async (req, res) => {
	try {
		const { characterId } = req.params;
		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
		);
		// console.log(response.data);
		res.json(response.data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
