// *Validación*

// Un ⁠ POST /tasks ⁠ sin ⁠ title ⁠ debe devolver:

// ⁠ text
// 400 Bad Request
//  ⁠

// con un JSON explicando el problema.

import { taskSchema } from "../schemas/taskSchema.js"

export const validateTask = (req, res, next) => {
    const resultado = taskSchema.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json(
            { error: resultado.error.issues.map(issue => issue.message) }
        )
    }

    req.body = resultado.data
    next()
}