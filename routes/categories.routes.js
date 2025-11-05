import { Router } from "express";

const categoriesRouter = new Router()

categoriesRouter.get("/", getCategories)
categoriesRouter.get("/new", createCategoryGet)
categoriesRouter.post("/new", createCategoryPost)

export default categoriesRouter

