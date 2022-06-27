const express = require('express')
const cors = require('cors')

const feedbackFormRoutes = require('./router/feedbackForm.routes')


const PORT = process.env.PORT || 5000 
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', feedbackFormRoutes)

app.listen(PORT, () => console.log(`Sever started an PORT: ${PORT}`))
