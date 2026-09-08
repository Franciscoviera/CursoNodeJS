// ### Middleware

// Agregá:
// *Logger*

// ⁠text
// GET /tasks
// POST /tasks
// DELETE /tasks/3
//  ⁠
export const logger = (req, res, next) => {
    let fecha = new Date()
    fecha = `[${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}]`
    console.log(fecha , req.method, req.url)
    next()
}