import { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner";

function DeleteABook(){
    const[loading, setLoading]=useState(false);
    const navigate=useNavigate()
    const{id}=useParams();


    const HandleDeleteBook=()=>{
        setLoading(true)
        axios.delete(`http://localhost:5000/api/book/delete/${id}`)
        .then(()=>{
            setLoading(false)
            navigate('/')

        })
        .catch((error)=>{
            setLoading(false)
            alert('An Error occured, check the console.')
            console.log(error)
        })
    }
return<div className="p-4">
        <BackButton/>
        <h2 className="text-3xl my-4">Delete A Book</h2>
        {
           loading?<Spinner/>:''
        
        }
        <div className="flex flex-col items-center border-2 border-sky-700 rounded-xl w-[500px] p-8 mx-auto">
            <h3 className="text-2xl text-white">Are you sure you want to delete this book?</h3>
            <button 
            className="p-4 bg-red-600 text-white m-6 w-full"
            onClick={HandleDeleteBook}
            
            > Yes, Delete</button>

        </div>
        
    </div>
}
export default DeleteABook;