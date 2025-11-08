import { Router } from "express";
import { getCategories, createCategoryPost, deleteCategory } from "../controllers/categories.controller.js";

const categoriesRouter = new Router()

categoriesRouter.get("/", getCategories)
categoriesRouter.post("/create", createCategoryPost)
// categoriesRouter.patch("/edit/:id", editCategory)
categoriesRouter.post("/delete/:id", deleteCategory)

export default categoriesRouter
