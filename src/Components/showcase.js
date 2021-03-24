// componente de pruebas

/* 
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
      
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click!
      </button>
      <p>
        {count} {new Date().toString()}
      </p>
    </div>
  );
} */
import React, { useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";



export default function App() {

  return(
    <div>
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path ='/'>
            HOLA
          </Route>
          <Route path ='/list'>
            <ItemListContainer/>
          </Route>
          <Route path = '/detail'>
            <ItemDetailContainer/>
          </Route>
          <Route path = '*'>
            404
          </Route>
        </Switch>
      </div>
      
      
      </BrowserRouter>


    </div>
  )


}
