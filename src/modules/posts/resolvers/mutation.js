import Post from "../models/model"
import { pubsub } from "./index"

const Mutation = {
    async createPost(parent, args, ctx, info) {
        console.log(args);
        let post = new Post(args);
        await pubsub.publish("PostAdded", { postAdded: args });
        return await post.save();
    },
    async singleUpload(parent, { file }) {
        const { stream, filename, mimetype, encoding } = await file;
        console.log(stream, filename);
        return { filename, mimetype, encoding };
    }
}

export default Mutation;