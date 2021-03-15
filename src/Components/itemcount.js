import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const ItemCount = () =>{

    const [count, setCount] = useState(0);
    

    //Variable representativa del stock disponible
    const [max, setMax] = useState(5);
    //Variable representativa del stock en cero
    let min = 0;
    let name = "Nombre del Producto";

    const onAdd= (cant)=>{
        setMax(max-cant);
        let aux = max-cant;
            setCount(count-cant);
            alert(`se agregaron ${cant} items del producto ${name} y queda un stock de ${aux}`)
    }

    return(

        <>

        <Card style={{ width: '16rem' }}>
            <Card.Header>{name}</Card.Header>
            <Card.Img variant="top" src="https://image.flaticon.com/icons/png/512/1020/1020878.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa!.
                    </Card.Text>

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

            </Card.Body>

        </Card>

        </>

       

       
    );
};