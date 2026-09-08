import { Router } from "express"
import { TaskController } from "../controllers/taskController.js"
import { validateTask } from "../middlewares/validateTask.js"

export const taskRouter = Router()

taskRouter.get("/", TaskController.obtenerTodas)
taskRouter.get("/:id", TaskController.obtenerTareaPorId)

taskRouter.post("/", validateTask,  TaskController.crearTarea)

taskRouter.put("/:id", TaskController.actualizarTarea)

taskRouter.delete("/:id",  TaskController.eliminarTarea)