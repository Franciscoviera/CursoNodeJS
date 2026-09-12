import { z } from "zod"

export const taskSchema = z.object({
    title: z.string( { error: "El titulo debe ser un texto"}).min(1, "El titulo no puede estar vacio"),
    description: z.string( { error: "La descripcion debe ser un texto"} ),
    completed: z.boolean({ error: "El campo completed debe ser verdadero o falso" }),
    priority: z.enum(["low", "medium", "high"], { error: "La prioridad debe ser low, medium o high"})
})