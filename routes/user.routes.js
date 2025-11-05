import { Router } from "express";

const userRouter = new Router()

userRouter.get("/", getUsernames)
userRouter.get("/new", createUsernameGet)
userRouter.post("/new", createUsernamePost)

export default userRouter;
