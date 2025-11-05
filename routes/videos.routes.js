import { Router } from "express";

const videosRouter = new Router()

videosRouter.get("/", getVideos)
videosRouter.get("/new", createVideoGet)
videosRouter.post("/new", createVideoPost)

export default videosRouter

