import { server } from "./server.js"

process.loadEnvFile() //Lee las variables de entorno del .env
const port = process.env.PORT ?? 3000
server.listen(port, () =>{
    console.log(`Servidor esta escuchando: http://localhost:${port}`)
})