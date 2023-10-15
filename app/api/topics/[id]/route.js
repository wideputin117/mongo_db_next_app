// this is route for dynamic to update the topic
 
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function PUT(request, { params }){
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
return NextResponse.json({message:"Updated sucessfuly"},{status:200})
}

export async function GET(request,{ params }){
    const { id }= params;
    await connectMongoDB();
   const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({message:"Return successful",topic},{status:200});
}