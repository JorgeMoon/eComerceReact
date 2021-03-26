import React, { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';
import {ItemDetail} from './itemdetail'

let URL = 'https://pokeapi.co/api/v2/pokemon/' /* 'https://pokeapi.co/api/v2/pokemon?limit=10' */;

export const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState([]);
    const verDetalle = (producto) =>{
        //componente
        console.log(producto)
        
    }
    
    useEffect(() => {

        fetch(URL)
          .then(response => {
              return response.json()
          })
          .then(data => {
              console.log(data) 
              setProducto(data.results)        
          })
          .catch(error => console.error(error));
      }, [])

   
    return (
        <div>
            <Button 
            variant="outline-primary"
            onClick={() => {
            verDetalle(producto);
            }}
            >
            Detalle
            </Button>

          <h1>List</h1>
          <ul>
            {producto.map(data => (
              <li>{data.name} - {data.url}</li>
            ))}
          </ul>
        </div>
      )
}