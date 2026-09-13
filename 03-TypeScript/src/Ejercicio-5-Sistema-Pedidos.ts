// ============================================================

// EJERCICIO 5 — MINI SISTEMA DE PEDIDOS

// ============================================================

// ------------------------------------------------------------

// PRODUCTO

// ------------------------------------------------------------



// Creá una interface Product con:

// - id: number

// - name: string

// - price: number

// - category

//

// category solamente puede ser:

// - "food"

// - "electronics"

// - "clothing"



// ------------------------------------------------------------

// PEDIDO

// ------------------------------------------------------------



// Creá una interface Order con:

// - id: number

// - customer: string

// - products: Product[]

// - status

//

// status solamente puede ser:

// - "pending"

// - "paid"

// - "shipped"

// - "cancelled"



// ------------------------------------------------------------

// CALCULAR TOTAL

// ------------------------------------------------------------



// Creá:

//

//   calculateTotal(order)

//

// Debe devolver el precio total de todos los productos.



// ------------------------------------------------------------

// ACTUALIZAR ESTADO

// ------------------------------------------------------------



// Creá:

//

//   updateOrderStatus(order, status)

//

// El status recibido solamente debe aceptar estados válidos.



// La función debe devolver algún resultado que permita saber

// si la operación fue exitosa o falló.



// ------------------------------------------------------------

// RESPUESTAS

// ------------------------------------------------------------



// Definí un tipo para una operación exitosa.

//

// Definí otro tipo para una operación fallida.

//

// Después definí un tipo que represente:

//

//   éxito O error

//

// Utilizá ese tipo como retorno de updateOrderStatus.



// ------------------------------------------------------------

// TUPLA

// ------------------------------------------------------------



// Creá:

//

//   getOrderSummary(order)

//

// Debe devolver una tupla:

//

//   [status, total]

//

// TypeScript debe saber que:

// - posición 0 → status

// - posición 1 → number



// ------------------------------------------------------------

// NEVER

// ------------------------------------------------------------



// Hacé un switch sobre order.status.



// Intentá utilizar "never" para comprobar que todos los estados

// posibles fueron manejados.



// La idea es que si mañana agregás:

//

//   "refunded"

//

// TypeScript pueda detectar que olvidaste manejar ese estado.



// ------------------------------------------------------------

// DESAFÍO FINAL

// ------------------------------------------------------------



// Intentá resolver todo el ejercicio sin utilizar:

// - any

// - unknown + as para saltear validaciones

// - @ts-ignore

//

// Conceptos que deberías terminar utilizando:

// - interface

// - type

// - literal types

// - union types

// - intersection types

// - arrays

// - funciones tipadas

// - narrowing

// - tuplas

// - unknown

// - never

// - type predicates

// ============================================================

type OrderStatus = "pending" | "paid" | "shipped" | "cancelled"

interface Product {
    id: number,
    name: string,
    price: number,
    category: "food" | "electronics" | "clothing"
}

interface Order {
    id: number,
    customer: string,
    products: Product[],
    status: OrderStatus
}

type SuccessfulUpdate = {
    success: true,
    updatedStatus: OrderStatus
}

type UnsuccessfulUpdate = {
    success: false,
    error: string
}

type ResponseUpdate = SuccessfulUpdate | UnsuccessfulUpdate

type OrderSummary = [ status:  OrderStatus, total: number]

function calculateTotal(order: Order): number{
    return order.products.reduce((total, product) => total + product.price ,0)
}

function updateOrderStatus(order: Order, newStatus: OrderStatus): ResponseUpdate{
    if(order.status === newStatus){
        return { success: false, error: "The order already has that status" }
    }
    switch(order.status){
        case "pending":
            if(newStatus === "shipped")
                return { success: false, error: "The order must be paid before being shipped" }
        break;

        case "paid":
            if(newStatus === "pending")
                return { success: false, error: "A paid order cannot be pending" }
        break;

        case "shipped":
            return { success: false, error: "An order that was already shipped cannot be updated" }

        case "cancelled":
            return { success: false, error: "A cancelled order cannot be updated" }

        default: assertNever(order.status)
    }
    order.status = newStatus
    return {success: true, updatedStatus: newStatus}
}

function getOrderSummary(order: Order): OrderSummary{
    const orderTotal = calculateTotal(order)
    return [order.status, orderTotal]
}

function assertNever(value: never): never {
    throw new Error(`Invalid Status: ${value}`)
}

//Posible cambio en la implementacion para usar intersetion types
// type OrderIdentification = {
//     id: number
//     customer: string
// }

// type OrderContent = {
//     products: Product[]
// }

// type OrderState = {
//     status: OrderStatus
// }

// type Order = OrderIdentification & OrderContent & OrderState