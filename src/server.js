const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const env = require('dotenv/config')

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB}:${process.env.DB_PASSWORD}@${process.env.DB}-9dllh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen('3333');