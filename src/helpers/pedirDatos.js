import stockProductos from "../data/stockProductos.js"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
            // cuerpo de la promesa
            setTimeout(() => {
                resolve(stockProductos)
            }, 3000)
        } )
}
