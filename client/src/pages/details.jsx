import{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'


function Details(){


    const [book,setBook]=useState([])
    const [loading,setLoading]=useState(false)
    const {id}=useParams()

 

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5000/api/book/${id}`)
        .then((res)=>{setBook(res.data.book)
            console.log(book)
            setLoading(false)
        })
       
         .catch((error)=>{
            console.log(error)
            setLoading(false)
         })
    },[])
    
    return<div className='p-3 border-slate-500 border-xl rounded-xl'>
        <BackButton/>
        <h2 className="text-2xl text-slate-600">Show Book</h2>
        {
            loading?(<Spinner/>):(
                <div className='flex flex-col border-2 border-sky-700 border border-slate-800 w-fill p-3'>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>id</div>
                        <span>{book._id}</span>

                    </div>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>Name</div>
                        <span>{book.name}</span>

                    </div>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>Author</div>
                        <span>{book.author}</span>

                    </div>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>Price</div>
                        <span>{book.price}</span>

                    </div>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>Publisher</div>
                        <span>{book.publisher}</span>

                    </div>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>Create Time</div>
                        <span>{ new Date(book.createdAt).toString()}</span>

                    </div>
                    <div className='my-3 '>
                        <div className='text-xl text-grey-700'>Update Time</div>
                        <span>{ new Date(book.updatedAt).toString()}</span>

                    </div>
                </div>
            )
        }
    </div>
}

export default Details;