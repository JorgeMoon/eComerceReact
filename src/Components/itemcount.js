import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const ItemCount = (props) =>{

    const [count, setCount] = useState(1);
    

    //Variable representativa del stock disponible
    const [max, setMax] = useState(props.stock);
    //Variable representativa del stock en cero
    let min = 1;
    let categoria =  props.categoria; /* "Nombre del Producto"; */

    const onAdd= (cant)=>{
        setMax(max-cant);
        let aux = max-cant;
            setCount(count-cant);
            alert(`se agregaron ${cant} items del producto ${props.title} de la Categoria ${categoria} y queda en stock de ${aux}`)
    }

    return(

        <>

        <Card style={{ width: '16rem' }}>
            <Card.Header  className="bg-dark text-white">{categoria}</Card.Header>
            <Card.Img variant="top" src = {props.pictureUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa!.
                    </Card.Text>
                    <p className="bg-info text-white">Stock: <span>{props.stock}</span></p>

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