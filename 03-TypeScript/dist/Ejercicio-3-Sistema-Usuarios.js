// ============================================================
// EJERCICIO 3 — SISTEMA DE USUARIOS
// ============================================================
function printUserInfo(user) {
    console.log(`id: ${user.id} name: ${user.name} email: ${user.email}`);
    if ("permissions" in user)
        console.log(` permissions: ${user.permissions}`);
    else
        console.log(`purchases: ${user.purchases}`);
}
function hasPermission(user, permission) {
    return user.permissions.includes(permission);
}
printUserInfo({ id: 1, name: "Fran", email: "Fran@gmail", permissions: ["read", "write", "delete"] });
printUserInfo({ id: 2, name: "Mili", email: "Mili@gmail", purchases: 10 });
console.log(hasPermission({ id: 1, name: "Fran", email: "Fran@gmail", permissions: ["read", "write", "delete"] }, "create"));
export {};
//# sourceMappingURL=Ejercicio-3-Sistema-Usuarios.js.map