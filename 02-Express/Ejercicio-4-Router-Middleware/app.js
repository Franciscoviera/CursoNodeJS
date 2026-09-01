import { app } from "./server.js"

process.loadEnvFile()
const port = process.env.PORT ?? 0
app.listen(port, () =>{
    console.log(`Servidor levantado en http://localhost:${port}`)
})