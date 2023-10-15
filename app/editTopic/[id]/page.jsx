 //this is dynamic page route for displaying single topic and to edit it
 
 import EditTopicFormOne from "@/components/EditTopic";
 
// get topic by  id
 const getTopicById= async (id)=>{
  try{
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store",
    });
    if(!res.ok){
      throw new Error("Failed to fetch the data");
    }
    return res.json();
  }
  catch(err){
console.log("Error is", err);

  }
 }

export default async function EditTopicForm({ params }) {
  const { id } = params;
  const topic = await getTopicById(id);
  const { title, description }= topic;
  console.log("id",id);
  return (
    <EditTopicFormOne id={id} title={title} description={description} />
  )
}
