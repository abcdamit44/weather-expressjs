const express = require('express');
const router = express.Router()


// const api = "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=d70f30185e7b127d0eb22ccb86b2fa0e";

// const temperature = async () => {
//     let data = await fetch(api);
//     let response = await data.json()
//     return response;
// }
// const a = temperature();
// a.then((data) => { console.log(data) })



router.get('/', (req, res) => {
    res.render('index', {
        name: "Home",
        fileName: __dirname,
    })
})
router.get('/about', (req, res) => {
    res.render('about', {
        name: "About"
    })
})
router.get('/temp', (req, res) => {
    res.render('temperature', {
        name: "Temperature"
    })
})

router.get('*', (req, res) => {
    res.render('404', {
        name: "404 Not Found !"
    })
})
module.exports = router