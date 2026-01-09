import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import heathCheck from './routes/healthCheck.routes.js'
import charachter from './routes/charachter.routes.js'
import job from './utils/cron.js'

const PORT = process.env.PORT || 8000;
const app = express();

job.start();
app.use(express.json())
app.use(cors())

app.use('/api/v1',heathCheck)
app.use('/api/v1',charachter)

app.listen(PORT,()=>{
    console.log(`⚙️  Server listening on port: ${PORT}`)
})