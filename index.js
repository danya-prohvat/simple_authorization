const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter') 

const PORT = process.env.PORT || 4001
const app = express()

app.use(express.json())
app.use('/api', authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://prokhtvatilov:1234@cluster0.pu2p26r.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(PORT))
    } catch (error) {
        console.log(error);
    }
}

 start()