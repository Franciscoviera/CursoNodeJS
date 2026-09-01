// EJERCICIO 2 — Primera API con Express
//
// Creá una API de libros utilizando Express.
//
// Cada libro debe tener:
// - id
// - title
// - author
//
// Implementá:
// - GET /books       → Obtener todos los libros
// - GET /books/:id   → Obtener un libro por su ID
// - GET /hello?name=Fran → Devolver un saludo personalizado
//
// Si se solicita un libro que no existe, devolver:
// - Código HTTP 404
// - Una respuesta JSON indicando el error
//
// Los libros pueden estar almacenados directamente en memoria.
//
// Prestá especial atención a la diferencia entre:
// - req.params
// - req.query
// - res.json()

import express from "express"
import { books } from "./books.js"

export const app = express()
app.disable("x-powered-by")

app.get("/", (req, res) =>{
    res.contentType("text/plain; charset=utf-8")
    return res.send("Pagina de Inicio")
})

app.get("/books", (req, res) => {
    return res.json(books)
})
app.get("/books/:id", (req, res) =>{
    const bookId = Number(req.params.id)
    if(Number.isInteger(bookId) && bookId > 0){
        const libroUnico = books.find(book => book.id === bookId)
        if(libroUnico)
            return res.json(libroUnico)
        else{
            return res.status(404).json({ error:"Libro No Encontrado" })
        }
    }else {
        return res.status(400).json({ error:"Id de Libro Invalido" })
    }
})

app.get("/hello", (req, res) =>{
    if(req.query.name !== undefined && req.query.name !== "")
        return res.send(`Hola, ${req.query.name}`)
    else {
        return res.status(400).json({ error: "Usuario Sin nombre" })
    }
})