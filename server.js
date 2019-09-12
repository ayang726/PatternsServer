const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PatternsDB", { useNewUrlParser: true });

// Define API routes here
app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});