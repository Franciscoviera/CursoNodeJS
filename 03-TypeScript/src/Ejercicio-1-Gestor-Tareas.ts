// ============================================================
// EJERCICIO 1 — GESTOR DE TAREAS
// ============================================================

// Definí un type Task con:
// - id: number
// - title: string
// - description: string
// - completed: boolean
// - priority: solamente "low", "medium" o "high"

// Creá un array con al menos 4 tareas.

// Creá una función getPendingTasks(tasks) que reciba las tareas
// y devuelva solamente las tareas pendientes.

// Creá una función completeTask(tasks, id) que busque una tarea
// por ID y la devuelva modificada como completada.

// No uses any.

// Conceptos:
// - type
// - arrays tipados
// - literal types
// - parámetros y retornos tipados
// - inferencia
// ============================================================
type Task = {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    priority: "low" | "medium" | "high"
}

const tarea1: Task = {
    id: 1,
    title: "Tarea 1",
    description: "Esta es la primera tarea",
    completed: true,
    priority: "high"
}

const tarea2: Task = {
    id: 2,
    title: "Tarea 2",
    description: "Esta es la segunda tarea",
    completed: false,
    priority: "medium"
}

const tarea3: Task = {
    id: 3,
    title: "Tarea 3",
    description: "Esta es la tercer tarea",
    completed: true,
    priority: "high"
}

const tarea4: Task = {
    id: 4,
    title: "Tarea 4",
    description: "Esta es la cuarta tarea",
    completed: false,
    priority: "low"
}

function getPendingTasks(tareas: Task[]): Task[]{ //tipo de funcion explicito
    const tareasPendientes = tareas.filter(tarea => !tarea.completed)
    return tareasPendientes
}

function completeTask(tareas: Task[], idTarea: number){ //tipo de funcion inferido
    const tareaCompletada = tareas.find(tarea => tarea.id === idTarea)
    if(!tareaCompletada)
        throw new Error("No se encontro la tarea")
    tareaCompletada.completed = true //actualiza la tarea en el listado ya que es la referencia al objeto tarea2
    return tareaCompletada
}

const tareas: Task[] = [tarea1, tarea2, tarea3, tarea4]  
console.log(getPendingTasks(tareas))
console.log("Tarea Actualizada: ", completeTask(tareas, 2))
console.log("Listado Actualizado: ", tareas)