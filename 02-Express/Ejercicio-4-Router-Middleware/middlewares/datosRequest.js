
export const datosRequest = (req, res, next) => {
    let fecha = new Date()
    fecha = `[${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}]`
    console.log(fecha , req.method, req.url)
    next()
}

export const apiVersion = (req, res, next) =>{
    res.setHeader("X-Api-Version", "1.0")
    next()
}