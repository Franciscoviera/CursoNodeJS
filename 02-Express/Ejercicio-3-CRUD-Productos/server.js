// EJERCICIO 3 — CRUD de productos
//
// Creá una API REST para administrar productos.
//
// Cada producto debe tener:
// - id
// - name
// - price
// - category
// - stock
//
// Implementá los siguientes endpoints:
// - GET    /products
// - GET    /products/:id
// - POST   /products
// - PUT    /products/:id
// - DELETE /products/:id
//
// GET /products debe permitir filtrar por categoría utilizando:
// - /products?category=technology
//
// POST /products debe recibir los datos mediante JSON y generar
// automáticamente el ID del nuevo producto.
//
// PUT /products/:id debe permitir modificar un producto existente.
//
// DELETE /products/:id debe eliminar un producto.
//
// Si se intenta obtener, modificar o eliminar un producto inexistente,
// devolver un código 404.
//
// Utilizar express.json() para poder trabajar con req.body.
//
// El objetivo es practicar:
// - req.body
// - req.params
// - req.query
// - GET
// - POST
// - PUT
// - DELETE
// - códigos de estado HTTP

import express from "express"
import { products, proxId } from "./productos.js"

export const app = express()
app.disable("x-powered-by")

app.use(express.json()) //Middleware q parsea a json


app.get("/",(req, res) =>{
    return res.send("Pagina de Inicio")
})

app.get("/products", (req, res) =>{
    if(req.query.category){
        const prodsFiltrados = products.filter(producto => producto.category.toLowerCase() === req.query.category.toLowerCase())
        return res.json(prodsFiltrados)
    }
    return res.json(products)
})

app.get("/products/:id", (req, res) =>{
    const idProd = Number(req.params.id)
    if(!Number.isInteger(idProd) || idProd <= 0)
        return res.status(400).json({ error: "Id de Producto Invalido" })
    const producto = products.find((producto) => producto.id === idProd)
    if(producto === undefined)
        return res.status(404).json({ error: "Producto No Encontrado" })
    return res.json(producto)
})

app.post("/products", (req, res) =>{
    const nuevoProd = req.body
    nuevoProd.id = proxId++
    products.push(nuevoProd)
    return res.status(201).json(nuevoProd)
})

app.put("/products/:id", (req, res) => {
    const idProd = Number(req.params.id)
    const prodActualizado = req.body
    if( !Number.isInteger(idProd) || idProd <= 0)
        return res.status(400).json({ error: "Id de Producto Invalido" })

    const indiceProdViejo = products.findIndex(producto => producto.id === idProd)
    if(indiceProdViejo  === -1 )
        return res.status(404).json({ error: "Producto No Encontrado" })

    const campos = ["name", "price", "category", "stock"]
    const tieneTodos = campos.every(campo =>  Object.keys(prodActualizado).includes(campo))
    if(!tieneTodos)
        return res.status(400).json("Faltan Campos Obligatorios")
    prodActualizado.id = idProd
    products[indiceProdViejo] = prodActualizado
    return res.json(products[indiceProdViejo])

})

app.delete("/products/:id", (req, res) =>{
    const idProd = Number(req.params.id)
    if(!Number.isInteger(idProd) || idProd <= 0)
        return res.status(400).json({ error: "Id de Producto Invalido" })

    const indiceProducto = products.findIndex((producto) => producto.id === idProd)
    if(indiceProducto === -1)
        return res.status(404).json({ error: "Producto No Encontrado" })
    const productoElim = products[indiceProducto]
    products.splice(indiceProducto,1)
    return res.json(productoElim)  
})