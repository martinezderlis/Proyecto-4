const Usuario = require('./Model/Usuario')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const uniqid = require('uniqid')
const morgan = require('combined')
const app = express()

app.use(express.json())
