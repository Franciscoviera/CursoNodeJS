// EJERCICIO 4 — Router y Middleware
//
// Tomá el ejercicio anterior y refactorizalo para separar
// las responsabilidades de la aplicación.
//
// Organizá el proyecto utilizando módulos separados para:
// - aplicación
// - rutas
// - controladores
// - datos
//
// Creá un Router específico para las rutas de productos.
//
// Además, creá un middleware que registre cada request con:
// - fecha y hora
// - método HTTP
// - URL solicitada
//
// Ejemplo:
// [2026-08-30 22:15:32] GET /products
//
// Creá también un middleware que agregue a las respuestas el header:
// X-API-Version: 1.0
//
// El objetivo es entender el flujo:
//
// Request
//   ↓
// Middleware
//   ↓
// Router
//   ↓
// Controller
//   ↓
// Response
//
// Y practicar:
// - app.use()
// - express.Router()
// - middleware
// - separación de módulos
// - import/export

import express from "express"

export const app = express()
app.disable("x-powered-by")

