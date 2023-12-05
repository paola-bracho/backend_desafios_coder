
class ProductManager {
    constructor() {
        this.products = []
    }

    static lastId = 0 // Para generar IDs autoincrementables

    addProduct(title, description, price, thumbnail, code, stock) {
        // Se valida que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.")
            return
        }

        // Se valida que no se repita el campo "code"
        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese código.")
            return
        }

        // Se agrega un producto con id autoincrementable
        const newProduct = {
            id: ++ProductManager.lastId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct)
        console.log("Producto agregado:", newProduct)
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const foundProduct = this.products.find(product => product.id === id)

        if (foundProduct) {
            console.log("Producto encontrado:", foundProduct)
        } else {
            console.error("Producto no encontrado. ID:", id)
        }

        return foundProduct
    }
}

// Testing
const manager = new ProductManager()

manager.addProduct("Televisor", "Full HD 4K", 1989.99, "TV.jpg", "CODE1", 8)
manager.addProduct("Mueble", "comodo super acolchado color azul", 199.99, "sofa.jpg", "CODE2", 5)

console.log("Todos los productos:", manager.getProducts())
manager.getProductById(1)
manager.getProductById(3) // Se provoca un error "Not found"
