import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/health', (req:Request, res:Response)=>{
  res.status(200).json({
    message:"service is running",
    status:"success!!!!"
  })
})


export default app;