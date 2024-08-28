
require('dotenv').config()
const mongoose=require('mongoose')
const MONG0_DB=process.env.MONG0_DB

mongoose.connect('MONGO_DB').then(()=>{
    console.log('Databae connected succeessfully!!')
}).catch((e)=>console.log(e))
