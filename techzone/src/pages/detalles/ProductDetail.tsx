import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const ProductDetail: React.FC = () =>{
    const location = useLocation()
    const navigate = useNavigate()
    const product = (location.state as any)?.product

    if (!product){
        return <h2>Producto no encontrado ☹️</h2>
    }

    return(
        <div>
            <h1>Detalle del producto</h1>
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
            <button onClick={ () => navigate ('/cart')}>Ir al carrito 🛒</button>
        </div>
    )
}
export default ProductDetail;