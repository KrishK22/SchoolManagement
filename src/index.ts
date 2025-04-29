import express from 'express'
import dotenv from 'dotenv'
import schoolRoutes from './routes/schoolRoutes'
dotenv.config()
const PORT = process.env.PORT


const app = express()
app.use(express.json())

app.use('/school', schoolRoutes)

app.listen(PORT)