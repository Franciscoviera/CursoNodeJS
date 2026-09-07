import { ProductModel } from "../models/productModel.js"
export class ProductController {

    static async paginaInicio(req, res){
        return res.send("Pagina de Inicio")
    }

    static async obtenerTodos(req, res){
        if(req.query.category)
            return ProductController.filtrarPorCategoria(req, res)
        else 
            return res.json(await ProductModel.obtenerTodos())
    }

    static async filtrarPorCategoria(req, res){ 
        const categoria = req.query.category
        const productosFiltrados = await ProductModel.obtenerPorCategoria(categoria)
        return res.json(productosFiltrados)
    }

    static async obtenerPorId(req, res){
        const idProd = Number(req.params.id)
        if(!Number.isInteger(idProd) || idProd <= 0)
            return res.status(400).json({ error: "Id de Producto Invalido" })

        const producto = await ProductModel.obtenerPorId(idProd)
        
        if(producto === undefined)
            return res.status(404).json({ error: "Producto No Encontrado" })

        return res.json(producto)
    }

    static async crearProducto(req, res){
        let nuevoProd = req.body
        nuevoProd = await ProductModel.crearProducto(nuevoProd)
        if(!nuevoProd)
            return res.status(400).json( { "error": "Faltan campos Obligatorios" } )
        return res.status(201).json(nuevoProd)

    }

    static async actualizarProducto(req, res){
        const idProd = Number(req.params.id)
        const prodActualizado = req.body
        if( !Number.isInteger(idProd) || idProd <= 0)
            return res.status(400).json({ error: "Id de Producto Invalido" })

        const indiceProdViejo = await ProductModel.obtenerIndice(idProd)
        if(indiceProdViejo  === -1 )
            return res.status(404).json({ error: "Producto No Encontrado" })

        prodActualizado.id = idProd
        const actualizacion = await ProductModel.actualizarProducto(prodActualizado, indiceProdViejo)
        if(!actualizacion)
            return res.status(400).json("Faltan Campos Obligatorios")

        return res.status(200).json(prodActualizado)
    }

    static async eliminarPorId(req, res){
        const idProd = Number(req.params.id)
        if(!Number.isInteger(idProd) || idProd <= 0)
            return res.status(400).json({ error: "Id de Producto Invalido" })
    
        const productoElim = await ProductModel.eliminarPorId(idProd)

        if(!productoElim)
            return res.status(404).json({ error: "Producto No Encontrado" })
        
        return res.json(productoElim)  
    }
}