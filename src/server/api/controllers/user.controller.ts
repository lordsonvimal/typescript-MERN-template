import log from "../../logger";
import {Request, Response} from "express";
import {createUser} from "../services/user.service";
import {omit} from "lodash";

export async function createUserController(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
