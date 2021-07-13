import mongoose from "mongoose";
import log from "../logger";

function connect() {
  const dbUri = process.env.DB_HOST as string;

  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    log.info("Database connected");
  }).catch((error) => {
    log.error("DB Connection error", error);
    process.exit(1);
  });
}

export default connect;
