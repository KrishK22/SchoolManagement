import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import schoolRoutes from './routes/schoolRoutes'
dotenv.config()
const PORT = process.env.PORT


const app = express()
app.use(express.json())

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET']
}))


app.use('/api', schoolRoutes)

app.listen(PORT)