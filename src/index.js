const express = require("express");
// Make an instance of the Express system
// so we can configure it 
// eg. routes, settings
const app = express();

// GET localhost:3000/ 
// .get("/", (req, res) => {})
// .get("/", (banana, elephant) => {})
app.get("/", (request, response) => {
	// response.send("<h1>Hello world!</h1>");
	response.json({
		message:"Hello world!"
	})
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server listening on localhost:${PORT}`);
});