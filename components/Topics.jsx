import React from 'react'
import RemoveButton from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


//to get list of data from mongodb
async function getList(){
  try{
const res = await fetch('http://localhost:3000/api/topics',{ // this is fetching data from route in api/topics
  cache:"no-store"
});
if (!res.ok) {
  throw new Error("Failed to fetch topics");
}

return res.json();
} catch (error) {
console.log("Error loading topics: ", error);
}
}

 

// this component will display the list of topics stored inn databse
  export default async function TopicsList() {
  const { topics }= await getList();
  return (
    <>
    {topics.map(t=> 
    <div key={t._id} className='p-4 border- border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <div>{t.description}</div>
        </div>
        <div className='flex gap-2'>
            <RemoveButton id={t._id} /> {/** sending id through props */}
            <Link href={`/editTopic/${t._id}`}>      {/* dynamic routes for editing*/}
                <HiPencilAlt size={24} />
            </Link>
        </div>
      </div>)}
    </>
  )
}
