require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comic/:comicId", async (req, res) => {
	try {
		const { comicId } = req.params;
		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?&apiKey=${process.env.MARVEL_API_KEY}` //il faudra mettre le query en interpolation dans l'URL
		);
		console.log(response.data);
		res.json(response.data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
