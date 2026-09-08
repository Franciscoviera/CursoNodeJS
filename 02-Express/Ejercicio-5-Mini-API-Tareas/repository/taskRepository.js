import { readFile, writeFile } from "node:fs/promises"

const path = "./data/tasks.json"
export const repoTasks = {
    
    async getAll() {
        const data = await readFile(path, "utf-8")
        return JSON.parse(data)
    },

    async getCompleted(){
        const data = JSON.parse(await readFile(path, "utf-8"))
        const tareasCompletadas =  data.filter(tarea => tarea.completed === true)
        return tareasCompletadas
    },

    async getIncompleted(){
        const data = JSON.parse(await readFile(path, "utf-8"))
        const tareasIncompletas =  data.filter(tarea => tarea.completed === false)
        return tareasIncompletas
    },

    async getHighPriority(){
        const data = JSON.parse(await readFile(path, "utf-8"))
        const tareasAltaPrioridad =  data.filter(tarea => tarea.priority === "high")
        return tareasAltaPrioridad
    },

    async getHighPriorityIncompleted(){
        const tareasAltaPrioridad = await this.getHighPriority()
        return tareasAltaPrioridad.filter(tarea => tarea.completed === "false")
    },

    async getById(id){
        const data = JSON.parse(await readFile(path,"utf-8"))
        const tarea = data.find(task => task.id === id)
        return tarea
    },

    async createTask(tarea){
        try{
            const data = JSON.parse(await readFile(path,"utf-8")) //necesario porq writefile remplaza todo el arch por lo q le pases
            const ids = data.map(task => task.id)
            const maxId = Math.max(...ids)
            if(data.length === 0)
                tarea.id = 1
            else 
                tarea.id = maxId + 1
            data.push(tarea)
            await writeFile(path, JSON.stringify(data, null, 2), "utf-8") //null porq no uso replacer y 2 para indentar y que sea mas facil de leer
        } catch {
            return undefined
        }
        return tarea
    },

    async updateTask(tareaAct){
        try{
            const data = JSON.parse(await readFile(path,"utf-8"))
            const indiceTareaVieja = data.findIndex(tarea => tarea.id === tareaAct.id)
            if(indiceTareaVieja === -1)
                return undefined
            data.splice(indiceTareaVieja, 1, tareaAct)
            await writeFile(path, JSON.stringify(data, null, 2), "utf-8")
            return data.at(indiceTareaVieja)
        } catch{
            return undefined
        }        
    },

    async deleteTask(id){
        try{
            const data = JSON.parse(await readFile(path, "utf-8"))
            const indiceTareaElim = data.findIndex(tarea => tarea.id === id)
            if(indiceTareaElim === -1)
                return undefined
            data.splice(indiceTareaElim,1)
            await writeFile(path, JSON.stringify(data, null, 2), "utf-8")
            return true
        } catch{
            return undefined
        }
    }
}
