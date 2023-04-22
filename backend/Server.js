const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routes = require("./Routes/Router")



//OepDyMblz0q2BDsG

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to mongo..."))
.catch((err)=>console.log(err))


app.use(routes);


app.listen(PORT, () => console.log("Server running on port " + PORT));