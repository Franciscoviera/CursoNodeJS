import { resumenSistema } from "./informadorSistema.js"

try{
    resumenSistema()
} catch(error){
    console.log(error.message)
}
