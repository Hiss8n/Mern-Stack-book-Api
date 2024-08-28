


const mongoose=require('mongoose');


const bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,

    },
    price:{
        type:Number
    },
    publisher:{
        type:String
    }
},
{
    timestamps:true
}

)


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
