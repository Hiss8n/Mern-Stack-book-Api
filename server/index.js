const express=require('express')
const cors=require('cors')
require('dotenv').config()

const PORT=process.env.PORT


const Book=require('./model/bookmodel.js')
const BookRouter=require('./Routes/bookRoutes.js')



require('./DataBase/db')


//middleware

const app=express();
app.use(express.json());
app.use(cors());

/* app.use(
       cors({
           origin:'http://localhost/5000',
           methods:["GET","POST","PUT","DELETE"],
           allowedHeaders:["Content-Type"],
       }) 
   )  */




app.use('/api/book',BookRouter)


app.listen(PORT,()=>console.log(`Running successfully at port ${PORT}`))