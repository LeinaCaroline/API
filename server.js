import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'


const prisma = new PrismaClient()
const app = express()
app.use(cors())



app.use(express.json())



app.post('/usuarios', async (req, res) => {
    //users.push(req.body)
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)




})



app.get('/usuarios', async (req, res) => {
    console.log(req)
    let users = []

    if (req.query) {
        users = await prisma.user.findMany({  //bem que eu tinha visto hahah
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })


    } else {
        users = await prisma.user.findMany()
    }





    res.status(200).json(users)

})


app.put('/usuarios/:id', async (req, res) => {

    console.log(req)


    await prisma.user.update({

        where: {
            id: req.params.id
        },



        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})


app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }

    })

    res.status(200).json({ message: "Usuario deletado com sucesso !" })

})







app.listen(3000)


/*
 Nome de usuario: leinnaacaroline
 senha: sigRXENBi4qtRvke
        
 
 
*/
