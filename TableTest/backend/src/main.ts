import {client} from "./db";

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlerMiddleware')
const PORT = process.env.PORT || 5000
const router = require('./routes/index')

//conect DB
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)


// error processing last Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await client.connect()
        await app.listen(PORT, () => {
            console.log(`Server started: http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
