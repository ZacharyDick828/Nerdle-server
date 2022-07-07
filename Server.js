const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()

const solutionController = require('./Controllers/Solution-controller')

// Middleware?
app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

// Controllers
app.use('/solutions', require('./Controllers/Solution-controller'))
app.use('/letters', require('./Controllers/Letter-controller'))

// Route for pages NOT handled by OUR routes.
app.get('*', (req, res) => {
  res.send('error404')
})

// DB connection 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + process.env.MONGO_URI);
  });

  // Listener
const PORT = process.env.PORT 

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));