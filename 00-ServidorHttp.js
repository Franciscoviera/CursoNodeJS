import http from 'node:http'
import { encontrarPuertoDisponibleAsync } from './01-PuertoLibre.js'

const puertoDeseado = process. env.PORT ?? 3000
const servidor = http.createServer((req, res) =>{
    console.log("Recibi la request")
    res.end("Hola Mundo")
})

const puerto = await encontrarPuertoDisponibleAsync(puertoDeseado)
  servidor.listen(puerto, () => {
    console.log(`Escuchando en http://localhost:${puerto}...`)
})