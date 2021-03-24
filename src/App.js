import {NavBar} from './Components/navbar';
import {ItemListContainer} from './Components/itemlistcontainer';
//import {ItemCount} from './Components/itemcount';

import './App.css';

//Routering
import {BrowserRouter, Switch, Route} from "react-router-dom";



function App() {
  return (

    /* ACA DEFINO LAS RUTAS CON ROUTERS */
    <BrowserRouter>
    <div className="App">
     
       <NavBar/> 
       <Switch>
          <Route exact path ='/'>
            HOLA
          </Route>
          <Route path ='/list'>
            <ItemListContainer/>
          </Route>
          <Route path = '/detail'>
            DETALLE DEL PRODUCTO
            {/* <ItemDetailContainer/> */}
          </Route>
          <Route path = '*'>
            404
          </Route>
        </Switch>
       {/* <ItemListContainer greeting="Este texto esta pasado por parametros como Propiedad de un componente"/> */}
       <br/>
    </div>
    </BrowserRouter>
  );
}

export default App;
