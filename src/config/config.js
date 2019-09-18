const path = require("path");
const rootPath = path.normalize(__dirname + "/..");

const config = {
    root: rootPath,
    port: process.env.PORT || 8000,
    dbOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        retryWrites: true,
        keepAlive: true,
        poolSize: 1,
        autoReconnect: true,
        socketTimeoutMS: 0,
        connectTimeoutMS: 360000
    },
    db_path: "mongodb://localhost:27017/graphql-starter"
}

export default config;