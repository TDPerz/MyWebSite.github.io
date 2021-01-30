const express = require('express');
const app = express();
const path = require('path');
const newData = require('./cData.json');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res)=>{
    const data = newData["news"];
    res.render('Home', {...data})
})

app.listen(3000, ()=>{
    console.log("Holiwis uwu")
})