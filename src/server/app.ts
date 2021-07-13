import dotenv from "dotenv";
import express from "express";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";

// Allow using .env file
dotenv.config();

const port = Number(process.env.SERVER_PORT);
const host = process.env.SERVER_HOST as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Start listening for requests
app.listen(port, host, () => {
  log.info(`server listening at http://${host}:${port}`);
  log.info(`Environment: ${process.env.NODE_ENV}`);
  connect();
  routes(app);
});
