const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const { info } = require("console");

// Set up express
const app = express();

// Set up Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/company",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => {
    console.log("Mongoose is connected")
  });

// -----------------------------Middleware-----------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", //<--- location of the react app
    credentials: true,
  }));

// -------------------------- Routes and PORT --------------------------
require("./public/routes/routes")(app);

const PORT = process.env.PORT || 3001;

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
