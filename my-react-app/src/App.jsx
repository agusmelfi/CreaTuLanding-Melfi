//http://localhost:5173/
import './App.css'
import {NavBar} from "./components/NavBar.jsx"
import {ItemListContainer} from  "./components/ItemListContainer.jsx"

function App(){

  return(
    <>
    <NavBar/>
    <ItemListContainer bienvenida="¡Bienvenido a nuestra tienda online!"/>
    </>
  );
};


export default App