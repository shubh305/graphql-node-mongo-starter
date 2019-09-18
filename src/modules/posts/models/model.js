import mongoose from 'mongoose';
const { Schema } = mongoose;

// Sample post model

const postSchema = new Schema({
    name: {
        type: String
    },
    author: {
        type: String,
        ref: 'User'
    }
}, {
    timestamps: true,
    versionKey: false
});

const Post = mongoose.model('Post', postSchema);
export default Post;