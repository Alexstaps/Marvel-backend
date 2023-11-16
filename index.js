const express = require("express");
const app = express();

app.use(express.json());

const charactersRoutes = require("./routes/characters");
const characterRoutes = require("./routes/character");
const comicsRoutes = require("./routes/comics");
const comicRoute = require("./routes/comic");
app.use(charactersRoutes);
app.use(characterRoutes);
app.use(comicsRoutes);
app.use(comicRoute);

app.get("/", (req, res) => {
	res.json({ message: "Welcome on my project" });
});

app.all("*", (req, res) => {
	res.status(404).json({ message: "page not found" });
});

app.listen(process.env.PORT, () => {
	console.log(`server started in port ${process.env.PORT}`);
});
