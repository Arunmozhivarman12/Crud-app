
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require('cors');
const PORT = process.env.PORT | 5000;
app.use(express.json());
const userRouter = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb://127.0.0.1:27017/college")
.then(() => console.log("connected"))
.catch(() => console.log('not connected'))



app.use(cors());


app.use(express.json());

app.use("/", userRouter);

app.listen(PORT, () => {
    console.log(`app running on ${PORT}`)
})