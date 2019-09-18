import fs from "fs";
import config from "../config/config";

const readSchemaUtil = (module) => {
    return fs.readFileSync(`${config.root}/modules/${module}/types/schema.graphql`, "utf8");
}

export {
    readSchemaUtil
}
