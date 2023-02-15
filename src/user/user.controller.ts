import { NextFunction, Router, Request, Response } from "express";
import * as UserService from "./user.service";

const userRouter = Router();

userRouter.get("/users", (req, res, next) => {
  return res.send(UserService.getAllUsers());
});

userRouter.get("/users/:id", (req, res, next) => {
  console.log(req.params.id);
  return res.send(UserService.getById(req.params.id));
});

userRouter.delete("/users/:id", (req, res, next) => {
  console.log(req.params.id);
  return res.send(UserService.deleteById(req.params.id));
});

userRouter.post("/users", (req: Request, res: Response, next: NextFunction) => {
  return res.send(
    UserService.saveUser({ email: req.body.email, password: req.body.password })
  );
});

export default userRouter;
