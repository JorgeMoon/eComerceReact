

import React, { useState } from "react";
import {ItemCount} from './itemcount';


let products = [
    {
        id: 'P001',
        title: 'Primer Producto',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://image.flaticon.com/icons/png/512/1020/1020878.png',
        stock: 5
    },
    {
        id: 'P002',
        title: 'Segundo Producto',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://image.flaticon.com/icons/png/512/1020/1020878.png',
        stock: 5
    },
    {
        id: 'P003',
        title: 'Tercer Producto',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://image.flaticon.com/icons/png/512/1020/1020878.png',
        stock: 5
    },
    {
        id: 'P004',
        title: 'Cuarto Producto',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://image.flaticon.com/icons/png/512/1020/1020878.png',
        stock: 5
    },
    {
        id: 'P005',
        title: 'Quinto Producto',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://image.flaticon.com/icons/png/512/1020/1020878.png',
        stock: 5
    }
]; 

export const ItemList = () =>{

    const [p, setProductos] = useState([]); 

//Solicitud Asincronica 2s
    let prom = new Promise((resolve, reject) => {

        setTimeout(() => resolve(products), 2000);
    });

    prom.then(
        (products) => {
            setProductos(products)

            /* console.log(products) */
        },

        (error) => {/* {console.log(error) */
    }
    );

    return(
        <>
        {/* paso como parametro la imagen al otro componente */}
        {/* ${console.log(p)} */}
        {p.map(pro => <ItemCount pictureUrl = {pro.pictureUrl}/>)}
        {/* <ItemCount pictureUrl = {products.pictureUrl}/> */}
        </>
    )
}