// ============================================================
// EJERCICIO 3 — SISTEMA DE USUARIOS
// ============================================================

// Creá una interface User con:
// - id: number
// - name: string
// - email: string

// Creá una interface Admin que extienda User y agregue:
// - permissions: string[]

// Creá una interface Customer que extienda User y agregue:
// - purchases: number

// Creá una función printUserInfo(user) que pueda recibir
// tanto un Admin como un Customer.

// La función debe mostrar la información común a ambos.

// Después, agregá comportamiento específico según si el usuario
// es Admin o Customer.

// No uses:
//   user as Admin
//   user as Customer
//
// para solucionar los errores.

// Creá una función hasPermission(user, permission) que solamente
// tenga sentido para un Admin.

// Pensá qué tipo debería recibir.

// Conceptos:
// - interface
// - extends
// - union types
// - narrowing
// - contratos
// ============================================================

interface User {
    id: number,
    name: string,
    email: string
}

interface Admin extends User {
    permissions: string[]
}

interface Customer extends User {
    purchases: number
}

function printUserInfo(user: Admin | Customer): void{
    console.log(`id: ${user.id} name: ${user.name} email: ${user.email}`)
    if("permissions" in user)
        console.log(` permissions: ${user.permissions}`)
    else
        console.log(`purchases: ${user.purchases}`)
}

function hasPermission(user: Admin, permission: string): boolean{
    return user.permissions.includes(permission)
}

printUserInfo({ id: 1, name: "Fran", email: "Fran@gmail", permissions: ["read", "write", "delete"] })
printUserInfo({ id: 2, name: "Mili", email: "Mili@gmail", purchases: 10 })
console.log(hasPermission({ id: 1, name: "Fran", email: "Fran@gmail", permissions: ["read", "write", "delete"] }, "create"))