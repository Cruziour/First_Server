require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/X', (req,res) => {
    res.send('<h1>rupeshdotcom</h1>')
})

app.get('/login', (req, res) => {
    res.send('<p>This is Rupesh Kumar Raushan</p>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})
