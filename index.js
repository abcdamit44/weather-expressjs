const express = require('express');
const path = require('path');


const app = express()
const port = 5000;

const hbs = require('hbs');

const partialsPath = path.join(__dirname, "./views/partials")
hbs.registerPartials(partialsPath)

const staticPath = path.join(__dirname, "./assets")
app.use(express.static(staticPath))

// Set view engine
app.set('view engine', 'hbs')
// app.set('views', "templates")  // Change 'views' directory name

// Initialize routes
app.use('/', require('./routes/route'))

// Ports
app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`)
})