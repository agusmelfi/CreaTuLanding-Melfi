const products = [
  { id: '1', title: 'Remera', category: 'ropa', description: 'Remera de algodón', price: 5000 },
  { id: '2', title: 'Zapatillas', category: 'calzado', description: 'Zapatillas deportivas', price: 15000 },
  // Más productos...
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products.find(prod => prod.id === id)), 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products.filter(prod => prod.category === categoryId)), 1000);
  });
};
