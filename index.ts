import express, { Request, Response } from 'express'
import  cors  from 'cors'
import { data } from './data';


const app = express();

const PORT = 4200;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }))


app.get('/data', (req: Request, res: Response) => {
    res.send(data)
})

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))
