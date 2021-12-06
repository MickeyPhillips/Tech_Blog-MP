const express = require('express')
const sequelize = require('./config/connection')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Now listening'))