const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.listen(port)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname, 'public')
    }
    res.sendFile('site.html', options, function(err){
        console.log(err)
    })
})