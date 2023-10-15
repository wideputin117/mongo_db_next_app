import mongoose,{ Schema } from "mongoose";
//this is schema declaration for topic
const topicSchema = new Schema(
    {
     title: String,
     description: String,
    },
    {
        timestamps: true,
    }
);
// this is schema model for saving data in mongo
const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema)

export default Topic;