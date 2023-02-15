import * as Express from "express";
import userRouter from "./user/user.controller";

const app = Express();

app.get("/", (req, res, next) => {
  res.send("Hello");
});

app.use(Express.json());
app.use(userRouter);

app.listen(5000, () => {
  console.log("server is running");
});
