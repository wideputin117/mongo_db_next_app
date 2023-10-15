// create routes for crud operatiions

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST(request){
    // destructure the incoming data from frontend
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({message:"Connected and saved the data"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();
    // console.log("Successful Get",topics);

    return NextResponse.json({message:"Retrieved the topics",topics},{status:200});
   
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Deletion sucessful",id},{status:200});
}