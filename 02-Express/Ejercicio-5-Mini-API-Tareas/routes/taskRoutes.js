import { Router } from "express"
import { TaskController } from "../controllers/taskController.js"

export const taskRouter = Router()

taskRouter.get("/", TaskController.obtenerTodas)
taskRouter.get("/:id", TaskController.obtenerTareaPorId)

taskRouter.post("/", TaskController.crearTarea)

taskRouter.put("/:id", TaskController.actualizarTarea)

taskRouter.delete("/:id",  TaskController.eliminarTarea)