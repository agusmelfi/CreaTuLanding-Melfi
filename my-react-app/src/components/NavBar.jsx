import {CartWidget} from "./CartWidget";

export function NavBar() {
  return (
    <>
    <nav style={{ background: '#eee', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <img src="/logo.png" alt="Logo tienda" style={{ height: '40px' }}/>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
    </>
  );
};
