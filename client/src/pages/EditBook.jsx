
import BackButton from "../components/BackButton"
import React,{useState,useEffect} from "react"
import Spinner from "../components/spinner"
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom"


function EditBook(){


    const [name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[author,setAuthor]=useState('')
    const[publisher,setPublisher]=useState('')
    const[loading,setLoading]=useState(false)

    const navigate=useNavigate()

    const {id}=useParams()


    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5000/api/book/${id}`)
        .then((response)=>{
            setName(response.data.name)
            setPrice(response.data.price)
            setAuthor(response.data.author)
            setPublisher(response.data.publisher)
           
           
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            Alert("An error occured,check the console")
            console.log(error)
        })

    },[])

    function handleEditBook(){
        const data={
            name,
            price,
            author,
        };
        axios.put(`http://localhost:5000/api/book/edit/${id}`,data)
        .then(()=>{
            setLoading(false)
            navigate('/')

        })
        .catch((error)=>{
            console.log(error)
            
            alert('Error occured,check the console please')
            setLoading(false )
        })

    }
    

    
    return<div className="p-4">
          <BackButton/>
        <h3 className="text-red-800">Edit Book</h3>
        {
            loading?(<Spinner/>):(
                <div className="flex flex-col border-2 border-blue-700 rounded-xl w-[500px] p-4 mx-auto">
                    <div className="my-4">
                        <label className="text-xl">Name</label>
                        <input type="text" placeholder="book name..."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>
                    <div className="my-4">
                        <label className="text-xl">Price</label>
                        <input type="text" placeholder="book name..."
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>

                    <div className="my-4">
                        <label className="text-xl">Author</label>
                        <input type="text" placeholder="book name..."
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>
                    
                    <div className="my-4">
                        <label className="text-xl">Publish Year</label>
                        <input type="text" placeholder="book name..."
                        value={publisher}
                        onChange={(e)=>setPublisher(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>
                    <button className="px-2 bg-sky-300 m-6" onClick={handleEditBook}>Add Book</button>



                </div>
            )
        }
       
    </div>
}


export default EditBook