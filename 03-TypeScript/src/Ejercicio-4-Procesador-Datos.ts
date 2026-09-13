// ============================================================
// EJERCICIO 4 — PROCESAR DATOS EXTERNOS
// ============================================================

// Imaginá que recibís datos externos cuyo tipo desconocés.

// Usá:
//   unknown
//
// para representar esos datos.

// Creá una interface User con:
// - id: number
// - name: string
// - email: string

// Creá una función processUser(data) que reciba unknown.

// La función solamente debe procesar el dato si realmente
// tiene la estructura de un User.

// Antes de utilizarlo como User, comprobá:
// 1. Que sea un objeto.
// 2. Que tenga id.
// 3. Que id sea number.
// 4. Que tenga name.
// 5. Que name sea string.
// 6. Que tenga email.
// 7. Que email sea string.

// NO hagas simplemente:
//
//   const user = data as User
//
// La idea es comprobar realmente los datos.

// DESAFÍO:
//
// Creá una función:
//
//   isUser(data): data is User
//
// que compruebe si data es un User.

// Después utilizá esa función dentro de processUser.

// Conceptos:
// - unknown
// - type narrowing
// - typeof
// - type predicates
// - runtime validation
// - diferencia entre TypeScript y JavaScript
// ============================================================

interface User {
    id: number,
    name: string,
    email: string
}

function isUser(data: unknown): data is User{
    // if("id" in data)
    if(typeof data !== "object" || data === null)
        return false
    if(!("id" in data) || typeof data.id !== "number")
        return false
    if(!("name" in data) || typeof data.name !== "string")
        return false
    if(!("email" in data) || typeof data.email !== "string")
        return false
    return true

}

function processUserData(data: unknown): void{
    if(isUser(data)){
        console.log("Procesando datos del usuario...")
        console.log(`Datos: ${data.id} ${data.name} ${data.email}`)
    } else
        console.log("Procesamiento fallido")
}

processUserData({id: 1, name: "Fran", email: "Fran@gmail"})
processUserData({id: 2, name: "Mili"})