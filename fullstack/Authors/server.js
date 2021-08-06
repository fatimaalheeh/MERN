const express = require("express");
const app = express();
const cors = require('cors') // This is new
require("./server/config/mongoose.config");
app.use(cors()) // This is new
app.use(express.json(), express.urlencoded({ extended: true }));
const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
