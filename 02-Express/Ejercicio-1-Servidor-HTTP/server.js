// EJERCICIO 1 — Servidor HTTP básico
//
// Creá un servidor utilizando únicamente el módulo nativo "http" de Node.js.
//
// El servidor debe responder:
// - GET /       → "Bienvenido a mi servidor"
// - GET /about  → Información sobre vos
// - GET /api    → Un JSON indicando que la API está funcionando
// - Cualquier otra ruta → 404 "Ruta no encontrada"
//
// Requisitos:
// - Utilizar http.createServer()
// - Utilizar módulos ES (import/export)
// - Configurar el puerto mediante una constante
// - Establecer correctamente el Content-Type
// - Utilizar códigos de estado HTTP apropiados
// - No utilizar Express

import http from "node:http"

//Al levantar el servidor con node --watch app.js actualiza automaticamente al cambiar algo (hay q refrescar la pagina nomas)
export const server = http.createServer((req,res) =>{
    function sendJSON(res, statusCode, data){
        res.setHeader("Content-Type", "application/json; charset=utf-8")
        res.statusCode = statusCode
        res.end(JSON.stringify(data))
    }
    if(req.method === "GET" && req.url === "/"){
        res.setHeader("Content-Type", "text/plain; charset=utf-8")
        res.statusCode = 200
        return res.end("Bienvenido a mi servidor")
    }      
    if(req.method === "GET" && req.url === "/about"){
        res.setHeader("Content-Type", "text/plain; charset=utf-8")
        res.statusCode = 200
        return res.end("Hola soy Fran")
    }
     if(req.method === "GET" && req.url === "/api"){
        return sendJSON(res, 200, {"titulo":"Mi Servidor","descripcion":"Esta funcionando exitosamente"})
    }
    return sendJSON(res, 404, {error: "Ruta no encontrada"})
       
})