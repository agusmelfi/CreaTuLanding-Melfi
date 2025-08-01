
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ItemDetail from '../components/ItemDetail';

export default function ItemDetailContainer (){
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(setProduct);
  }, [itemId]);

  return product ? <ItemDetail {...product} /> : <p>Cargando...</p>;
};

