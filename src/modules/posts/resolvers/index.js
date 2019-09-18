import Query from './query';
import Mutation from './mutation';
import Subscription from './subscriptions';
const { PubSub } = require('apollo-server-express');
const pubsub = new PubSub();

const postResolver = {
    Query,
    Mutation,
    Subscription
}

export {
    pubsub,
    postResolver
}