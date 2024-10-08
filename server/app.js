const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./utils/config')
const blogRoutes = require('./routes/blogs')

const app = express()

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message))

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRoutes)

module.exports = app