 'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function AddTopic() {
  // get the data from form and set them
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
   const router = useRouter()
  // creating handle to submit the form
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!title || !description){
      alert("Please Add Title and Description")
      return;
    }
// api to send data to database
try{
const res = await fetch('http://localhost:3000/api/topics', {
  method:"POST",
  headers:{
    "Content-type": "application/json"
  },
  body: JSON.stringify({ title, description }),
});
      if(res.ok){
        router.push('/');
        router.refresh();
      }
       else {
        throw new Error("Failed to create a topic")
}
}catch(err){
console.log(err);
}

  }

  return (
   <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input className="border border-slate-500 px-8 py-2"
    
   
    onChange={(e)=>setTitle(e.target.value)}
    value={title}
    type="text"
    placeholder="Add Tile" />
    
    <input  onChange={(e)=> setDescription(e.target.value)} 
    className="border border-slate-500 px-8 py-2"
    type="text"
    value={description}
    
    placeholder="Add Topic Description" />
    <button type="submit" className="border rounded-sm ">Add Topic</button>
   </form>
  )
}
