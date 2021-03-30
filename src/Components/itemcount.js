import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const ItemCount = ({item}) =>{

    const [count, setCount] = useState(1);
    
    //Variable representativa del stock disponible
    const [max, setMax] = useState(item.stock);
    //Variable representativa del stock en cero
    let min = 1;
    
    const onAdd= (cant)=>{
        setMax(max-cant);
        let aux = max-cant;
            setCount(count-cant);
            alert(`se agregaron ${cant} items del producto ${item.title} de la Categoria ${item.categoria} y queda en stock de ${aux}`);  
    }


    return(

        <>
        <p className="bg-info text-white">Stock: <span>{max}</span></p>
        <Form>
            <Form.Group controlId="idControl">
                <div className="container">

                <Form.Label>Cantidad</Form.Label>
                <div className="d-flex justify-content-center">
                <Button 
                        variant="outline-primary" 
                            onClick={() => {
                                let aux = count;
                                if(aux>min){
                                    setCount(count - 1);
                                }
                        }}
                >-</Button>

                <Form.Control 
                    className="text-center"
                    type="text"
                    placeholder="cantidad"
                    id="#"
                    name="cantidad"
                    min={min}
                    max={max}
                    value={count} />
                    
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        let aux = count;
                        if(aux<max){
                            setCount(count + 1);
                        }
                }}  
                >+</Button>
                </div>
                </div>
            </Form.Group>

        </Form>

                <Button 
                    variant="outline-primary"
                    onClick={() => {
                        onAdd(count);
                        
                }}
                ><FontAwesomeIcon icon={faShoppingCart} />  
                 Agregar a Carrito
                </Button>

        </>

       

       
    );
};