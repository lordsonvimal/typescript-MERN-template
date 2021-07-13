import path from "path";
import validateRequest from "./middlewares/validateRequest";
import { Express, Request, Response } from "express";
import {createUserSchema} from "./api/schemas/user.schema";
import {createUserController} from "./api/controllers/user.controller";

export default function(app: Express) {
  app.get("/", (_req: Request, res: Response) => res. sendFile(path.join(__dirname + '../../../public/index.html')));
  app.get("/api/", (_req: Request, res: Response) => res.sendStatus(200));
  app.post("/api/users", validateRequest(createUserSchema), createUserController);
}
