import { Router } from "express";

const productsRouter = new Router()

productsRouter.get("/", getproducts)
productsRouter.get("/create", createproductGet)
productsRouter.post("/create", createproductPost)
productsRouter.patch("/edit/:id", editProduct)
productsRouter.delete("/delete/:id", deleteProduct)

export default productsRouter

