import process from "node:process"

export function obtenerDatosEnv(){
    console.log(`Nombre: ${process.env.name}`)
    console.log(`Nombre App: ${process.env.app_name}`)
    console.log(`Puerto: ${process.env.port}`)
}