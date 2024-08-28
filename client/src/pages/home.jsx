import { useEffect, useState } from "react"
import axios from 'axios';
import Spinner from "../components/spinner";
import {Link} from 'react-router-dom'
 import{AiOutlineEdit} from 'react-icons/ai'
import{BsInfoCircle} from 'react-icons/bs' 
import{MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'


function Home(){


    const[books,setBooks]=useState([]);
    const[loading,setLoading]=useState(false);


  /*   async function getAllProducts(){
        try {
            const response=await axios.get('http://localhost:5000/api/books')
              setBooks(response.data.)
              setLoading(false)
              console.log(books)
            
        } catch (error) {
            console.log(error)
            setLoading(false)   
        }

    } */


    useEffect(()=>{
        setLoading(true)
    axios
    .get('http://localhost:5000/api/book')
    .then((res)=>{
        setLoading(false)
        setBooks(res.data.books)
    })
    .catch((err)=>{
        setLoading(false)
        console.log(err)
    })
  },[])
  console.log(books)
  


return<div className="p-4">
    <div className="flex justify-between items-center">
        <h2>Books List</h2>

        <Link to='books/add'>
        <MdOutlineAddBox className="text-sky-600 text-3xl"/>
        </Link>
    

    </div>
    {
        loading?(<Spinner/>):(
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">Name</th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">Price</th>
                    <th className="border border-slate-600 rounded-md">Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book,index)=>(
                            <tr className="h-7" key={book._id}>
                                <td className="border border-slate-600 rounded-md text-2xl  text-center">{index+1}</td>
                                <td className="border border-slate-600 rounded-md text-2xl  text-center">{book.name}</td>
                                <td className="border border-slate-600 rounded-md text-2xl  text-center max-md:hidden">{book.author}</td>
                                <td className="border border-slate-600 rounded-md text-2xl  text-center max-md:hidden">{book.price}</td>
                                <td className="border border-slate-600 rounded-md text-2xl  text-center max-md:hidden">{book.publisher}</td>
                                <td className="border border-slate-600 rounded-md text-center">
                                    <div className="flex jusify-center gap-x-3">
                                        <Link to={`books/details/${book._id}`}>
                                        <BsInfoCircle className="text-2xl text-green-600"/>
                                        </Link>

                                        <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className="text-2xl text-yellow-600"/>
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className="text-2xl text-red-600"/>
                                        </Link>

                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        )
    }
   
</div>
   


}

export default Home;