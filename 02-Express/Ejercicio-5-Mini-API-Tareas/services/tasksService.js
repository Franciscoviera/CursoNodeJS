import { repoTasks } from "../repository/taskRepository.js"

export const tasksService = {

    async getAll(){
        return await repoTasks.getAll()
    },

    async getCompleted(){
        return await repoTasks.getCompleted()
    },

    async getIncompleted(){
        return await repoTasks.getIncompleted()
    },

    async getHighPriorityIncompleted(){
        return await repoTasks.getHighPriorityIncompleted()
    },

    async getHighPriority(){
        return await repoTasks.getHighPriority()
    },
    
    async getTaskById(id){
        const tarea = await repoTasks.getById(id)
        if(!tarea)
            return { error: "Tarea No Encontrada" }
        return tarea
    },

    async createTask(tarea){
        return await repoTasks.createTask(tarea)
    },

    async updateTask(tareaAct){
        return await repoTasks.updateTask(tareaAct)
    },

    async deleteTask(id){
        return await repoTasks.deleteTask(id)
    }
}