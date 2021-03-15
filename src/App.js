import {NavBar} from './Components/navbar';
import {ItemListContainer} from './Components/itemlistcontainer';
//import {ItemCount} from './Components/itemcount';

import './App.css';



function App() {
  return (

    <div className="App">
     
       <NavBar/> 
       <ItemListContainer greeting="Este texto esta pasado por parametros como Propiedad de un componente"/>
       <br/>
       
       
       

 
    
      
      <header className="App-header">
      
    
        <h2>Este es un Titulo h2</h2>
      

          <button className="btn btn-primary">Boton de Prueba</button>

      </header>
    </div>
  );
}

export default App;
