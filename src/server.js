import express from "express";
import { ApolloServer } from "apollo-server-express";
import Schema from "./modules/schema";
import config from "./config/config";
import Database from "./db/mongoose";
new Database();

const server = new ApolloServer({
    schema: Schema,
    playground: true
});

const app = express();
server.applyMiddleware({ app });

const expressServer = app.listen(config.port, () => {
    console.log(`Server ready at http://localhost:${config.port}${server.graphqlPath}`)
    console.log(`Subscriptions ready at ws://localhost:${config.port}${server.subscriptionsPath}`)
}
);

// For subscriptions

server.installSubscriptionHandlers(expressServer);
