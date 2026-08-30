import { resumenSistema } from "../Ejercicio-2-Info-Sistema/informadorSistema.js"
import { saludo, sumar, restar, multiplicar, dividir } from "./funcionesCLI.js"

const operacion = process.argv[2]
switch(operacion){
    case "sumar":
        console.log(sumar())
        break;
    case "restar":
        console.log(restar())
        break;
    case "multiplicar":
        console.log(multiplicar())
        break;
    case "dividir":
        console.log(dividir())
        break;
    case "saludo":
        saludo()
        break;
    case "info":
        resumenSistema()
        break;
}