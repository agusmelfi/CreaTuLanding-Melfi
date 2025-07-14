
import ItemCount from './ItemCount';

export default function ItemDetail ({ title, description, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={10} initial={1} onAdd={(count) => console.log(`Agregado: ${count}`)} />
    </div>
  );
};

