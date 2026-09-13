// ============================================================
// EJERCICIO 1 — GESTOR DE TAREAS
// ============================================================
const tarea1 = {
    id: 1,
    title: "Tarea 1",
    description: "Esta es la primera tarea",
    completed: true,
    priority: "high"
};
const tarea2 = {
    id: 2,
    title: "Tarea 2",
    description: "Esta es la segunda tarea",
    completed: false,
    priority: "medium"
};
const tarea3 = {
    id: 3,
    title: "Tarea 3",
    description: "Esta es la tercer tarea",
    completed: true,
    priority: "high"
};
const tarea4 = {
    id: 4,
    title: "Tarea 4",
    description: "Esta es la cuarta tarea",
    completed: false,
    priority: "low"
};
function getPendingTasks(tareas) {
    const tareasPendientes = tareas.filter(tarea => !tarea.completed);
    return tareasPendientes;
}
function completeTask(tareas, idTarea) {
    const tareaCompletada = tareas.find(tarea => tarea.id === idTarea);
    if (!tareaCompletada)
        throw new Error("No se encontro la tarea");
    tareaCompletada.completed = true; //actualiza la tarea en el listado ya que es la referencia al objeto tarea2
    return tareaCompletada;
}
const tareas = [tarea1, tarea2, tarea3, tarea4];
console.log(getPendingTasks(tareas));
console.log("Tarea Actualizada: ", completeTask(tareas, 2));
console.log("Listado Actualizado: ", tareas);
export {};
//# sourceMappingURL=Ejercicio-1-Gestor-Tareas.js.map