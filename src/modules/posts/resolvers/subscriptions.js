import { pubsub } from "./index"

const Subscription = {
    postAdded: {
        resolve: payload => payload.postAdded,
        subscribe: () => pubsub.asyncIterator(["PostAdded"]),
    },
}

export default Subscription;