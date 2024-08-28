const express=require('express')
const { getAllBooks,getASingleBook, addABook, updateABook, deleteABook } = require('../controllers/book-controllers')


const router=express.Router()


router.get('/',getAllBooks)
router.get('/:id',getASingleBook)
router.post('/add/',addABook)
router.put('/edit/:id',updateABook)
router.delete('/delete/:id',deleteABook)





module.exports=router