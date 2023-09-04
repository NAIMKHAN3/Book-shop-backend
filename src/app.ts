import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import errorHandler, { notfoundandler } from './middleware/errorHandler'
import handleValidationError from './middleware/handleMongooseValidationError'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send({ success: true, message: 'University Management Server is Running' })
})
app.use(errorHandler)
app.use(notfoundandler)
app.use(handleValidationError)

export default app
