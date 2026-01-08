import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import heathCheck from './routes/healthCheck.routes.js'

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/v1',heathCheck)

app.listen(PORT,()=>{
    console.log(`⚙️  Server listening on port: ${PORT}`)
})