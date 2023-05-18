// import the express module (dependencies) using JavaScript's require() statement, and then invoke express.
const express = require("express");
const cors = require('cors'); // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/store_config");

// make sure these lines are above any app.get or app.post code blocks
// these two lines are for creating new object into database
app.use(cors()) // This is new
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// create our routes and controller to send some data. (CRUD)

const router = require("./routes/store_routes")
router(app)


// the app.listen() line of code that actually runs our server on a specified port.
app.listen(port, () => console.log(`Listening on port: ${port}`));