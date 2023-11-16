const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const charactersRoutes = require("./routes/characters");
const characterRoutes = require("./routes/character");
const comicsRoutes = require("./routes/comics");
const comicRoute = require("./routes/comic");
app.use(charactersRoutes);
app.use(characterRoutes);
app.use(comicsRoutes);
app.use(comicRoute);

app.all("*", (req, res) => {
	res.status(404).json({ message: "page not found" });
});

app.listen(process.env.PORT, () => {
	console.log(`server started in port ${process.env.PORT}`);
});
