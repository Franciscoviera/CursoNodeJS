// # Ejercicio 5 — Mini API completa

// Este es el integrador.

// Construí una API de *tareas (Tasks)* utilizando todo lo anterior.

// Cada tarea tendrá:

// ⁠text
// id
// title
// description
// completed
// priority
//  ⁠

// Por ejemplo:

// ⁠ json
// {
//   "id": 1,
//   "title": "Estudiar Node",
//   "description": "Repasar Express",
//   "completed": false,
//   "priority": "high"
// }
//  ⁠

// ### Endpoints

// ⁠ text
// GET     /tasks
// GET     /tasks/:id
// POST    /tasks
// PUT     /tasks/:id
// DELETE  /tasks/:id
//  ⁠

// ### Query parameters

// Permití:

// ⁠ text
// GET /tasks?completed=true
//  ⁠

// y:

// ⁠ text
// GET /tasks?priority=high
//  ⁠

// Incluso:

// ⁠ text
// GET /tasks?completed=false&priority=high
//  ⁠
import express from "express"
import { taskRouter } from "./routes/taskRoutes.js"
import { logger } from "./middlewares/logger.js"
import { validateTask } from "./middlewares/validateTask.js"

export const app = express()
app.disable("x-powered-by")
app.use(express.json())
app.use(logger)
app.use(validateTask)

app.use("/tasks", taskRouter)
