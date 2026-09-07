import { products, obtenerProxId } from "../data/productsData.js"

export class ProductModel{

    static async obtenerTodos(){
        return products
    }
    static async obtenerPorCategoria(categoria){
        const prodsFiltrados = products.filter(producto => producto.category.toLowerCase() === categoria.toLowerCase())
        return prodsFiltrados
    }

    static async obtenerPorId(id){
        return products.find((producto) => producto.id === id)
    }

    static async crearProducto(nuevoProd){
        const campos = ["name", "price", "category", "stock"] //cambiar por products.keys??
        const tieneTodos = campos.every(campo =>  Object.keys(nuevoProd).includes(campo))
        if(!tieneTodos)
            return undefined
        nuevoProd.id = obtenerProxId()
        products.push(nuevoProd)
        return nuevoProd
    }

    static async actualizarProducto(prodActualizado, indiceProdViejo){
        const campos = ["name", "price", "category", "stock"] //cambiar por products.keys??
        const tieneTodos = campos.every(campo =>  Object.keys(prodActualizado).includes(campo))
        if(!tieneTodos)
            return false
        products[indiceProdViejo] = prodActualizado
        return true
    }

    static async obtenerIndice(id){
        return products.findIndex((producto) => producto.id === id)
    }

    static async eliminarPorId(id){
        const indiceProducto = await this.obtenerIndice(id)
        if(indiceProducto === -1)
            return undefined
        const productoElim = products[indiceProducto]
        products.splice(indiceProducto,1)
        return productoElim
    }
}