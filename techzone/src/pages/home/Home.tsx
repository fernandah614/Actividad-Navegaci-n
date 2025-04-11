import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../componentes/ProductCard";



const products = [
  { id: 1, nombre: 'PALETA NUDE NEÓN', precio: 20.000, imagen: 'https://http2.mlstatic.com/D_NQ_NP_995614-MCO32922339100_112019-O.webp' },
  { id: 2, nombre: 'KIT KABA ', precio: 82.000, imagen:'https://http2.mlstatic.com/D_NQ_NP_812173-MLV72335838972_102023-O.webp' ,descripción:'Paga 2 lleva 3'},
  { id: 3, nombre: 'PALETA DE SOMBRAS NUDE', precio: 20.000, imagen:'https://http2.mlstatic.com/D_NQ_NP_914578-MCO49589766052_042022-O.webp' }
];
const Home: React.FC = () => {
    const navigate = useNavigate()
    const handleViewDetails = (product: any) => {
        navigate('/details', { state: { product } });
      };
//hadleViewDetails esta se llama cuando se hace clic en ver detalles.
return(
<div>
      <h1>MALU R🌸SA</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          nombre={product.nombre}
          precio={product.precio}
          imagen={product.imagen}
          descripción={product.descripción}
          onVerDetalles={() => handleViewDetails(product)}
        />
      ))}
    </div>
);
};

export default Home;