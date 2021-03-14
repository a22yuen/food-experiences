import mongoose from 'mongoose';

//models folder contains all mongoose schemas, like this postSchema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],  //change to price
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//create model with schema
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;