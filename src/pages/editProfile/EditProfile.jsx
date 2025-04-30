import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const EditProfile = () => {
    let [edit,setEdit]=useState(null)
    let {editid}=useParams();
    console.log(editid);//editid
   

useEffect(()=>{
    axios.get(`http://localhost:8080/users/${editid}`).then((res)=>{
        setEdit(res.data)
    })
},[])

    let handleChange=(e)=>{
        let {name,value}= e.target;
        setEdit({...edit,[name]:value});
    }

    let navigate=useNavigate();

    let handleSubmit= async (e)=>{
        e.preventDefault();
        let res=await axios.put(`http://localhost:8080/users/${editid}`,edit)
        
      if(res){
        toast.success("Profile Updated")
        navigate(`/profile/${editid}`)
      }else{
        toast.error("update failed")
      }
      
    }
    
  return (
    <div>
      <h1>
        Edit Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">username</label>
        <input type="text" value={edit?.username} name='username' onChange={handleChange}/><br></br>
        <label htmlFor="">Email</label>
        <input type="text" value={edit?.email} name='email' onChange={handleChange}/><br></br>
        <label htmlFor="">Password</label>
        <input type="text" value={edit?.password} name='password' onChange={handleChange}/><br></br>
       <button>Update</button>
      </form>
    </div>
  )
}

export default EditProfile
