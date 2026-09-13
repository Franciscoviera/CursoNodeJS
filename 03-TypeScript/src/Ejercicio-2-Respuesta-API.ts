// ============================================================
// EJERCICIO 2 — RESPUESTA DE UNA API
// ============================================================

// Definí un tipo SuccessResponse que represente una respuesta
// exitosa.
//
// Debe tener:
// - success: true
// - data: un usuario
//
// El usuario debe tener:
// - id: number
// - name: string
// - email: string

// Definí un tipo ErrorResponse que represente una respuesta
// con error.
//
// Debe tener:
// - success: false
// - error: string

// Creá un tipo que represente una respuesta que pueda ser
// SuccessResponse O ErrorResponse.

// Creá una función getUserResponse(id) que devuelva ese tipo.

// Usá el valor de "success" para hacer narrowing.
//
// Si success es true:
//   TypeScript debería saber que existe "data".
//
// Si success es false:
//   TypeScript debería saber que existe "error".

// No uses "as" para solucionar los errores.

// Conceptos:
// - union types
// - literal types
// - objetos
// - funciones
// - type narrowing
// - discriminated unions
// ============================================================

type User = {
    id: number,
    name: string,
    email: string
}
type SuccessResponse = {
    success: true
    data: User
}

type ErrorResponse = {
    success: false,
    error: string
}

type Response = SuccessResponse | ErrorResponse

const user1: User = {
    id: 1,
    name: "aaa",
    email: "aa@aaa"
}
const user2: User = {
    id: 2,
    name: "bbb",
    email: "bb@bbb"
}
const user3: User = {
    id: 3,
    name: "ccc",
    email: "cc@ccc"
}
const database: User[] = [user1, user2, user3]

function getUserResponse(users: User[], id: number): Response{
    const userIdentified = users.find(user => user.id === id)
    if(userIdentified){
        return {success: true, data: userIdentified}
    }
    const response: ErrorResponse = {success: false, error: "Usuario No Encontrado"}
    return response
}


const response1 = getUserResponse(database, 1)
const response2 = getUserResponse(database,99)
if(response1.success)
    console.log("Primera respuesta existosa ", response1.data)
else
    console.log("Primera respuesta fallida ", response1.error)

if(response2.success)
    console.log("Segunda respuesta existosa ", response2.data)
else
    console.log("Segunda respuesta fallida ", response2.error)