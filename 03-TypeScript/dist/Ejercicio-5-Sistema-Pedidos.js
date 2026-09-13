// ============================================================
function calculateTotal(order) {
    return order.products.reduce((total, product) => total + product.price, 0);
}
function updateOrderStatus(order, newStatus) {
    if (order.status === newStatus) {
        return { success: false, error: "The order already has that status" };
    }
    switch (order.status) {
        case "pending":
            if (newStatus === "shipped")
                return { success: false, error: "The order must be paid before being shipped" };
            break;
        case "paid":
            if (newStatus === "pending")
                return { success: false, error: "A paid order cannot be pending" };
            break;
        case "shipped":
            return { success: false, error: "An order that was already shipped cannot be updated" };
        case "cancelled":
            return { success: false, error: "A cancelled order cannot be updated" };
        default: assertNever(order.status);
    }
    order.status = newStatus;
    return { success: true, updatedStatus: newStatus };
}
function getOrderSummary(order) {
    const orderTotal = calculateTotal(order);
    return [order.status, orderTotal];
}
function assertNever(value) {
    throw new Error(`Invalid Status: ${value}`);
}
export {};
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
//# sourceMappingURL=Ejercicio-5-Sistema-Pedidos.js.map