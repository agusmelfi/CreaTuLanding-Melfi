import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data/products';
import ItemList from '../components/ItemList';

export default function ItemListContainer(){
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts;
    fetchData(categoryId).then(setItems);
  }, [categoryId]);

  return <ItemList items={items} />;
};
