// ============================================================
// EJERCICIO 4 — PROCESAR DATOS EXTERNOS
// ============================================================
function isUser(data) {
    // if("id" in data)
    if (typeof data !== "object" || data === null)
        return false;
    if (!("id" in data) || typeof data.id !== "number")
        return false;
    if (!("name" in data) || typeof data.name !== "string")
        return false;
    if (!("email" in data) || typeof data.email !== "string")
        return false;
    return true;
}
function processUserData(data) {
    if (isUser(data)) {
        console.log("Procesando datos del usuario...");
        console.log(`Datos: ${data.id} ${data.name} ${data.email}`);
    }
    else
        console.log("Procesamiento fallido");
}
processUserData({ id: 1, name: "Fran", email: "Fran@gmail" });
processUserData({ id: 2, name: "Mili" });
export {};
//# sourceMappingURL=Ejercicio-4-Procesador-Datos.js.map