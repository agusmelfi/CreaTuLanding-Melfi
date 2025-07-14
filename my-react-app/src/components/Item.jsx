
import { Link } from 'react-router-dom';

export default function Item ({ id, title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};



