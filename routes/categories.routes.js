import { Router } from "express";
import { getCategories } from "../controllers/categories.controller.js";

const categoriesRouter = new Router()

categoriesRouter.get("/", getCategories)
// categoriesRouter.get("/create", createCategoryGet)
// categoriesRouter.post("/create", createCategoryPost)
// categoriesRouter.patch("/edit/:id", editCategory)
// categoriesRouter.delete("/delete/:id", deleteCategory)

export default categoriesRouter
