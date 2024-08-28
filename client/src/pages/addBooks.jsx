import BackButton from "../components/BackButton"
import React,{useState} from "react"
import Spinner from "../components/spinner"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function AddBooks(){


    const [name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[author,setAuthor]=useState('')
    const[publisher,setPublisher]=useState('')
    const[loading,setLoading]=useState(false)

    const navigate=useNavigate()

    function handleSave(){
        const data={
            name,
            price,
            author,
            publisher,
        };
        axios.post('http://localhost:5000/api/book/add',data)
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
        <h3 className="text-red-800">Add New Books</h3>
        {
            loading?(<Spinner/>):(
                <div className="flex flex-col border-2 border-blue-700 rounded-xl w-[500px] p-4 mx-auto">
                    <div className="my-4">
                        <label className="text-xl">Name</label>
                        <input type="text" placeholder=" Enter book name..."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>
                    <div className="my-4">
                        <label className="text-xl">Price</label>
                        <input type="text" placeholder=" Enter Price..."
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>

                    <div className="my-4">
                        <label className="text-xl">Author</label>
                        <input type="text" placeholder="e.g Nelson Mandela"
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>
                    
                    <div className="my-4">
                        <label className="text-xl">Publisher</label>
                        <input type="text" placeholder="e.g Lorn Horn Publisher"
                        value={publisher}
                        onChange={(e)=>setPublisher(e.target.value)}
                        className="border-2 border-gray-600 px-4 py-2 w-full"
                        
                        
                        />
                    </div>
                    <button className="px-2 bg-sky-300 m-6" onClick={handleSave}>Add Book</button>



                </div>
            )
        }
       
    </div>
}


export default AddBooks