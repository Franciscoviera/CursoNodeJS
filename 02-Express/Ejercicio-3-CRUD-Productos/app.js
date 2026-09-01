import { app } from "./server.js"

process.loadEnvFile()
const port = process.env.PORT ?? 3000 //lo dejo distinto al .env para comprabar q lo saca de .env
app.listen(port, ()=>{
    console.log(`Servidor levantado en http://localhost:${port}`)
})