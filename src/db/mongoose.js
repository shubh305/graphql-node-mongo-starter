import mongoose from "mongoose";
import config from "../config/config";
mongoose.Promise = global.Promise;

class Database {
    constructor() {
        this.db_connect();
    }

    async db_connect() {
        try {
            mongoose.set('useNewUrlParser', true);
            mongoose.set('useFindAndModify', false);
            mongoose.set('useCreateIndex', true);
            this.database = await mongoose.connect(config.db_path, config.dbOptions);
            console.log("Database connection successful", config.db_path);
            mongoose.set('debug', true);
        } catch (err) {
            console.error(err);
        }
    }

}

export default Database;
