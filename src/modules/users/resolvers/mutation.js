import User from "../models/model";

const Mutation = {
    createUser(parent, args, ctx, info) {
        console.log(args);
        let user = new User(args);
        return user.save();
    }
}

export default Mutation;