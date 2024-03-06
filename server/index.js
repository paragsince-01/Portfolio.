import mongoose from "mongoose";
import express from  'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB is Connected');
}).catch((err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
        console.log('Server is running on port 3000');
    }
);