// ============================================================
// EJERCICIO 2 — RESPUESTA DE UNA API
// ============================================================
const user1 = {
    id: 1,
    name: "aaa",
    email: "aa@aaa"
};
const user2 = {
    id: 2,
    name: "bbb",
    email: "bb@bbb"
};
const user3 = {
    id: 3,
    name: "ccc",
    email: "cc@ccc"
};
const database = [user1, user2, user3];
function getUserResponse(users, id) {
    const userIdentified = users.find(user => user.id === id);
    if (userIdentified) {
        return { success: true, data: userIdentified };
    }
    const response = { success: false, error: "Usuario No Encontrado" };
    return response;
}
const response1 = getUserResponse(database, 1);
const response2 = getUserResponse(database, 99);
if (response1.success)
    console.log("Primera respuesta existosa ", response1.data);
else
    console.log("Primera respuesta fallida ", response1.error);
if (response2.success)
    console.log("Segunda respuesta existosa ", response2.data);
else
    console.log("Segunda respuesta fallida ", response2.error);
export {};
//# sourceMappingURL=Ejercicio-2-Respuesta-API.js.map