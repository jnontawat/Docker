const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const currentDateTime = moment()
    res.send(`Hello World! <br/>${currentDateTime.format()}`)
})
app.listen(port, () => console.log(`Docker Exam on port ${port}!`))