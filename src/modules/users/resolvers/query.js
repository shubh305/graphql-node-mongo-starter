import User from "../models/model"

const Query = {
    async users() {
        return await User.find({});
    },

    uploads: (parent, args) => { },
}

export default Query;