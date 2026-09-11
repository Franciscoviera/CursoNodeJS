import { test, describe, before, after } from "node:test"
import assert from "node:assert"
import app from "./app.js"

let server
const port = 1234
const url = `http://localhost:${port}/tasks`

before(async () =>{
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => resolve())
        server.on("error", reject)
    })
})

describe("GET /tasks", () =>{
    let response
    let data

    before(async () =>{
        response = await fetch(url)
        data = await response.json()
    })

    test("Debe tener estado HTTP 200 (ok)", () => { 
        assert.strictEqual(response.status, 200)
    })

    test("Debe devolver un array", () => {
        assert.ok(Array.isArray(data))
    })

    test("Cada tarea debe tener los campos esperados", () => {
        const campos = ["id", "title", "description", "completed", "priority"]
        assert.ok( 
            data.every(tarea => 
                campos.every(campo => 
                    Object.hasOwn(tarea, campo) 
                ) 
            )
        )
    })

    test("Cada campo de las tareas debe ser del tipo esperado", () => {
        assert.ok(
            data.every( tarea =>
                typeof tarea.id === "number" &&
                typeof tarea.title === "string" &&
                typeof tarea.description === "string" &&
                typeof tarea.completed === "boolean" &&
                ["low", "medium", "high"].includes(tarea.priority)
            )
        )
    })
})

describe("GET /tasks/:id", () =>{
    test("Debe devolver estado HTTP 200", async () =>{
        const response = await fetch(`${url}/1`)
        assert.strictEqual(response.status, 200)
    })

    test("Debe devolver estado HTTP 404", async () =>{
        const response = await fetch(`${url}/9999`)
        assert.strictEqual(response.status, 404)
    })

    test("Debe devolver estado HTTP 400", async () =>{
        const response = await fetch(`${url}/sda`)
        assert.strictEqual(response.status, 400)

    })

    test("Debe devolver error: Tarea No Encontrada", async () => {
        const response = await fetch(`${url}/999`)
        const data = await response.json()
        assert.strictEqual(data.error, "Tarea No Encontrada")
    })

    test("Debe devolver la tarea esperada", async () => {
        const response = await fetch(`${url}/1`)
        const data = await response.json()
        assert.strictEqual(data.id, 1)
    })

    test("Debe devolver una tarea con los campos esperados", async () => {
        const response = await fetch(`${url}/1`)
        const data = await response.json()
        const campos = ["id", "title", "description", "completed", "priority"]
        assert.ok(
            campos.every(campo => 
                Object.hasOwn(data, campo)
            )
        )
    })

    test("Debe devolver una tarea con los tipos de datos esperados", async () => {
        const response = await fetch(`${url}/1`)
        const data = await response.json()
        assert.ok(
            typeof data.id === "number" &&
            typeof data.title === "string" &&
            typeof data.description === "string" &&
            typeof data.completed === "boolean" &&
            ["low", "medium", "high"].includes(data.priority)
        )
    })

})

describe("/POST /tasks", () =>{
    test("Debe devolver estado HTTP 201", async () => {
        let response 
        let tareaCreada
        try {
            response = await fetch(`${url}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "Test Crear Tarea",
                    description: "Practicar testing con node:test",
                    completed: false,
                    priority: "high"
                })
            })
            tareaCreada = await response.json()
            assert.strictEqual(response.status, 201)
        } finally {
            //Limpieza para no afectar los datos del servidor
            if(tareaCreada){
                await fetch(`${url}/${tareaCreada.id}`, {
                    method: "DELETE"
                })
            }
        }
    })

    test("Debe devolver estado HTTP 400 y Falta Titlo de la tarea", async () => {
        const response = await fetch(`${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                //title: "Test Crear Tarea",
                description: "Practicar testing con node:test",
                completed: false,
                priority: "high"
            })
        })
        assert.strictEqual(response.status, 400)
        const data = await response.json()
        assert.strictEqual(data.error, "Falta titulo de la tarea" )
    })


    test("Debe almacenar correctamente la nueva tarea", async () => {
        let postResponse 
        let tareaCreada
        let getResponse
        let tareaAlmacenada
        try{
            postResponse = await fetch(`${url}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "Test Crear Tarea",
                    description: "Practicar testing con node:test",
                    completed: false,
                    priority: "high"
                })
            })
            tareaCreada = await postResponse.json()
            getResponse = await fetch(`${url}/${tareaCreada.id}`)
            tareaAlmacenada = await getResponse.json()
            assert.deepStrictEqual(tareaCreada, tareaAlmacenada) // uso deepStrictEqual para verificar la igualdad entre objetos (strictEqual da falso porq aunq tengan los mismos campos y valores son objetos distintos)
        } finally {
            //Limpieza para no afectar los datos del servidor
            if(tareaCreada){
                await fetch(`${url}/${tareaCreada.id}`, {
                    method: "DELETE"
                })
            }    
        }    
    })

})

describe("PUT /tasks/:id", () => {

    test("Debe devolver estado HTTP 200", async () => {
        const responseOriginal = await fetch(`${url}/1`)
        const tareaOriginal = await responseOriginal.json()
        try {
            const response = await fetch(`${url}/1`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "Test Actualizar Tarea",
                    description: "Practicar testing con node:test",
                    completed: false,
                    priority: "high"
                })
            })
            assert.strictEqual(response.status, 200)
        } finally {
            //Limpieza para no afectar los datos del servidor
            await fetch(`${url}/${tareaOriginal.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: tareaOriginal.title,
                    description: tareaOriginal.description,
                    completed: tareaOriginal.completed,
                    priority: tareaOriginal.priority
                })
            })
        }
    })

    test("Debe devolver estado HTTP 404", async () => {
        const response = await fetch(`${url}/999`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Test Actualizar Tarea",
                description: "Practicar testing con node:test",
                completed: false,
                priority: "high"
            })
        })
        assert.strictEqual(response.status, 404)
    })

    test("Debe almacenar correctamente la tarea actualizada", async () => {
        const responseOriginal = await fetch(`${url}/1`)
        const tareaOriginal = await responseOriginal.json()
        try {
            const putResponse = await fetch(`${url}/1`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "Test Actualizar Tarea",
                    description: "Practicar testing con node:test",
                    completed: false,
                    priority: "high"
                })
            })
            const tareaActualizada = await putResponse.json()
            const getResponse = await fetch(`${url}/${tareaActualizada.id}`)
            const tareaAlmacenada = await getResponse.json()
            assert.deepStrictEqual(tareaActualizada, tareaAlmacenada) // uso deepStrictEqual para verificar la igualdad entre objetos (strictEqual da falso porq aunq tengan los mismos campos y valores son objetos distintos)
        } finally {
            //Limpieza para no afectar los datos del servidor
            await fetch(`${url}/${tareaOriginal.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: tareaOriginal.title,
                    description: tareaOriginal.description,
                    completed: tareaOriginal.completed,
                    priority: tareaOriginal.priority
                })
            })
        }
    })

})

describe("DELETE /tasks/:id", () => {
    test("Debe devolver estado HTTP 204", async () =>{
         //Crea la tarea que va a eliminar
        const postResponse = await fetch(`${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Test Crear Tarea",
                description: "Practicar testing con node:test",
                completed: false,
                priority: "high"
            })
        })
        const tareaAEliminar = await postResponse.json()

        try{
            const response = await fetch(`${url}/${tareaAEliminar.id}`, {
                method: "DELETE"
            })
            assert.strictEqual(response.status, 204)
        } finally {
            const getResponse = await fetch(`${url}/${tareaAEliminar.id}`)
            assert.strictEqual(getResponse.status, 404)
        }
    })

    test("Debe devolver estado HTTP 404 y Tarea No Encontrada", async () => {
        const response = await fetch(`${url}/999`, {
            method: "DELETE"
        })
        assert.strictEqual(response.status, 404)
        const data = await response.json()
        assert.strictEqual(data.error, "Tarea No Encontrada")
    })
})

after(async () =>{
    return new Promise((resolve, reject) => {
        server.close((err) =>{
            if(err)
                return reject(err)
            resolve()
        })
        server.on("error", reject)
    })
})