const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('bem vindo')
})
app.get('/', (req, res) => {
    res.send('bem vindo')
})

app.listen(port, () => {
    console.log(`funcionando na porta ${port}`)
})