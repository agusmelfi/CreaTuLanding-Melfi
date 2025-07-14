import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar(){
  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/"><img src="/logo.png" alt="Logo" style={{ height: '40px' }} /></Link>
      </div>

      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/calzado">Calzado</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

