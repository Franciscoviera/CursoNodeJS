// *Validación*

// Un ⁠ POST /tasks ⁠ sin ⁠ title ⁠ debe devolver:

// ⁠ text
// 400 Bad Request
//  ⁠

// con un JSON explicando el problema.

export const validateTask = (req, res, next) => {
    const tarea = req.body
    if(!("title" in tarea))
        return res.status(400).json({ error: "Falta titulo de la tarea"})
    if(!("description" in tarea))
        return res.status(400).json({ error: "Falta descripcion de la tarea"})
    if(!("priority" in tarea))
        return res.status(400).json({ error: "Falta prioridad de la tarea"})
    if(!("completed" in tarea))
        return res.status(400).json({ error: "Falta estado de la tarea"})
    next()
}