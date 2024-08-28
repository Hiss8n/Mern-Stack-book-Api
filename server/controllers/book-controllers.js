
const Book=require('../model/bookmodel')

const getAllBooks=async(req,res)=>{
    try {

        const books=await Book.find({})

        if(!books){
            return res.status(404).json({message:"No books found"})
        }

        return res.status(200).json({books})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
        
    }
}


const getASingleBook=async(req,res)=>{
    try {
        const {id}=req.params

        const book=await Book.findById(id)

        if(!book){
         res.status(404).json({message:'The boook your are looking for is not available'})
        }

        return res.status(200).json({book})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
        
    }
}

const updateABook=async(req,res)=>{
    try {
        const {id}=req.params

        const book=await Book.findByIdAndUpdate(id,req.body)

        if(!book){
         res.status(404).json({message:'somthing went wron,try again later'})
        }

        const updatedBook=await Book.findById(id)

        return res.status(200).json({updatedBook})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
        
    }
}

const addABook=async(req,res)=>{
    try { 

        const book=await Book.create(req.body)

        res.status(200).send({book})
        
    } catch (error) {

        console.log(error)

        res.status(500).json({message:error.message})
        
    }
}

const deleteABook=async(req,res)=>{
    try {
        const {id}=req.params

        const book=await Book.findByIdAndDelete(id)

        if(!book){
            res.status(404).json({message:"The book is not found,try again later"})
        }

        return res.status(200).json({message:'Book delete successfully'})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
        
    }
}


module.exports={getAllBooks,getASingleBook,updateABook,addABook,deleteABook}