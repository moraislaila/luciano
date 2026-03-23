const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let usuarios = [
    { id:'1', nome: 'isa', email:'isa@gmail.com'},
    {id: '2', nome: 'bia', email:'bia@gmail.com'}
]

usuarios.push({
    id: usuarios.length + 1,
    nome: 'Ana',
    email: 'ana@email.com',
  })

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body
})

const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email
}
app.listen(port, () => {
    console.log(`funcionando na porta ${port}`)
})
usuarios.push(novoUsuario)

