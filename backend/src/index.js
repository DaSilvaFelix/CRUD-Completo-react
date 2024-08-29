import  cors  from 'cors';
import  morgan from 'morgan';
import  express from "express";
import  {router}  from './routers/router.js';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router)

app.listen(4000,()=>{
    console.log('servidor corriendo en el puerto 4000');
    
});