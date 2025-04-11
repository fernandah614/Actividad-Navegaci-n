import React from "react";


type ProductCardProps = {
    nombre: string;
    precio: number;
    imagen: string;
    descripción?:string;
    onVerDetalles: () => void;
  };

  const ProductCard: React.FC<ProductCardProps> = ({ nombre, precio, imagen,descripción, onVerDetalles }) => {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem', margin: '1rem', backgroundColor: '#fff' }}>
        <img src={imagen} alt={nombre} width="200" style={{ borderRadius: '8px' }} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        {descripción && <p><strong>Descripción:</strong> {descripción}</p>}
        <button onClick={onVerDetalles}>Ver detalles</button>
      </div>
    );
  };
  
  export default ProductCard;
