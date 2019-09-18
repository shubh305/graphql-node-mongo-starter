import Post from "../models/model"

const Query = {
    async posts() {
        return await Post.find({}).populate("author");
    }
}

export default Query;