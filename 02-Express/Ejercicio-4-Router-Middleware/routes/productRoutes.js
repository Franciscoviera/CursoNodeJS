import { Router } from "express"
import { ProductController } from "../controllers/productController.js"

export const productsRouter = Router()

productsRouter.get("/", ProductController.obtenerTodos)
productsRouter.get("/:id", ProductController.obtenerPorId)
productsRouter.post("/", ProductController.crearProducto)
productsRouter.put("/:id", ProductController.actualizarProducto)
productsRouter.delete("/:id", ProductController.eliminarPorId)


