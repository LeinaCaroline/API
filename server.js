import express from 'express'

const app = express()
app.use(express.json())
const users = []


app.post('/usuarios', (req,res) =>{
    console.log = (req.boby)
    res.send('Ok deu certo')
})



app.get('/usuarios', (req,res) =>{
    res.send('Ok, deu bom')
})

    app.listen(3000)
