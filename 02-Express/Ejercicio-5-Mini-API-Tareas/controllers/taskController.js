import { tasksService } from "../services/tasksService.js"
export class TaskController{
    
    static async obtenerTodas(req, res){
        if(req.query.priority === "high" && req.query.completed === "false"){
            const tareasIncompletasAltaPrioridad = await tasksService.getHighPriorityIncompleted()
            return res.status(200).json(tareasIncompletasAltaPrioridad)
        }
        if(req.query.completed === "true"){
            const tareasCompletadas = await tasksService.getCompleted()
            return res.status(200).json(tareasCompletadas)
        }
        if(req.query.completed === "false"){
            const tareasIncompletas = await tasksService.getIncompleted()
            return res.status(200).json(tareasIncompletas)
        }
        if(req.query.priority === "high"){
            const tareasAltaPrioridad = await tasksService.getHighPriority()
            return res.status(200).json(tareasAltaPrioridad)
        }

        const tareas = await tasksService.getAll()
        return res.status(200).json(tareas)
    }

    static async obtenerTareaPorId(req, res){
        const id = Number(req.params.id)
        const tarea = await tasksService.getTaskById(id)
        if("error" in tarea)
            return res.status(404).json(tarea)
        return res.status(200).json(tarea)
    }

    static async crearTarea(req, res){
        let nuevaTarea = req.body
        nuevaTarea = await tasksService.createTask(nuevaTarea)
        if(!nuevaTarea)
            return res.status(400).json({ error: "Error al guardar la tarea nueva" })
        return res.status(201).json(nuevaTarea)
    }

    static async actualizarTarea(req, res){
        const tareaAct = req.body
        const idTarea = Number(req.params.id)
        tareaAct.id = idTarea

        const resultado = await tasksService.updateTask(tareaAct)
        if(resultado === undefined)
            return res.status(404).json({ error: "Tarea No Encontrada"})
        return res.status(200).json(resultado)
    }

    static async eliminarTarea(req, res){
        const idElim = Number(req.params.id)
        const resultado = await tasksService.deleteTask(idElim)
        if(resultado === undefined)
            return res.status(404).json( { error: "Tarea No Encontrada" })
        return res.status(204).send()
    }
}