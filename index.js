const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT)
//default port 5000 otherwise heroku defined