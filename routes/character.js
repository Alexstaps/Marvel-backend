require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/character/:characterId", async (req, res) => {
	try {
		const { characterId } = req.params;
		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
		);
		console.log(response.data);
		res.json(response.data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
