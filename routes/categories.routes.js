import { Router } from "express";
import { getCategories, createCategoryPost, deleteCategory, editCategoryGet, editCategoryPost } from "../controllers/categories.controller.js";

const categoriesRouter = new Router()

categoriesRouter.get("/", getCategories)
categoriesRouter.post("/create", createCategoryPost)
categoriesRouter.get("/edit/:id", editCategoryGet)
categoriesRouter.post("/edit/:id", editCategoryPost)
categoriesRouter.post("/delete/:id", deleteCategory)

export default categoriesRouter
