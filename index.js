const express = require('express')
const path = require("path");
const app = express()
const port = 3000



app.get('/counter',(req, res) => {
    res.sendFile(path.resolve('static/counter.html'))
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})