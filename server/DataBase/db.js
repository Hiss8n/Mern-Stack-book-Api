
require('dotenv').config()
const mongoose=require('mongoose')
const MONG0_DB=process.env.MONG0_DB

mongoose.connect('mongodb+srv://test123:test123@cluster0.awvv3s7.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Databae connected succeessfully!!')
}).catch((e)=>console.log(e))