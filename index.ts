import express, { Request, Response } from 'express'
import  cors  from 'cors'
import { data } from './data';
import { pool } from './db';


const app = express();


const PORT = 4200;

app.use(cors({
    origin: ['*'],
    credentials: true,
  }))



app.get('/', async (req, res) => {
  console.log('get')
  try {
    const result = await pool.query('SELECT * FROM users');
    console.log('result ', result)
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/data', (req: Request, res: Response) => {
    res.send(data)
})

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))
