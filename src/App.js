import {NavBar} from './Components/navbar';
import {ItemListContainer} from './Components/itemlistcontainer';
//import {ItemCount} from './Components/itemcount';

import './App.css';

//Routering
import {BrowserRouter, Switch, Route} from "react-router-dom";
//items
import { ItemDetailContainer } from './Components/itemdetailcontainer';



function App() {
  return (

    /* ACA DEFINO LAS RUTAS CON ROUTERS */
    <BrowserRouter>
    <div className="App">
     
       <NavBar/> 
       <Switch>
          <Route exact path ='/'>
            HOLA Los productos estan en el menu del navbar "Productos"
          </Route>
          <Route path ='/list'>
            <ItemListContainer/>
          </Route>
          <Route path ='/category/:categoryId'>
            <ItemListContainer/>
          </Route>
          <Route path='/item/:itemId' >
            <h2>este seria el detalle</h2>
              <ItemDetailContainer />
          </Route>

          <Route path = '*'>
            404
          </Route>
        </Switch>
    </div>
    {/* <ItemDetailContainer/> */}
    </BrowserRouter>


  );
}

export default App;
