import { app } from "./server.js"

process.loadEnvFile() //Lee las variables de entorno del .env
const port = process.env.PORT ?? 1234

app.listen(port, () =>{
    console.log(`Servidor Levantado en http://localhost:${port}`)
})