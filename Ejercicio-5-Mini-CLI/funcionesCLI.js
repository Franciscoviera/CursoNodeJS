import process from "node:process"


export function sumar(){
    const n1 = Number(process.argv[3])
    const n2 = Number(process.argv[4])
    if(Number.isNaN(n1) || Number.isNaN(n2))
        throw new Error("Solo acepta Numeros")
    return n1 + n2
}

export function restar(){
    const n1 = Number(process.argv[3])
    const n2 = Number(process.argv[4])
    if(Number.isNaN(n1) || Number.isNaN(n2))
        throw new Error("Solo acepta Numeros")
    return n1 - n2
}

export function multiplicar(){
    const n1 = Number(process.argv[3])
    const n2 = Number(process.argv[4])
    if(Number.isNaN(n1) || Number.isNaN(n2))
        throw new Error("Solo acepta Numeros")
    return n1 * n2
}

export function dividir(){
    const n1 = Number(process.argv[3])
    const n2 = Number(process.argv[4])
    if(Number.isNaN(n1) || Number.isNaN(n2))
        throw new Error("Solo acepta Numeros")
    if(n2 === 0)
        throw new Error("Division por cero")
    return n1 / n2
}

export function saludo(){
    console.log(`Hola, ${process.argv[3]}`)
}