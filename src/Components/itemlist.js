

import React, { useState } from "react";
import {ItemCount} from './itemcount';


let products = [
    {
        id: 'P001',
        categoria: "Frutas",
        title: 'Tomate',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'../svg/tomato.svg',
        stock: 17
    },
    {
        id: 'P002',
        categoria: "Frutas",
        title: 'Palta',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'../svg/avocado.svg',
        stock: 13
    },
    {
        id: 'P003',
        categoria: "Citricos",
        title: 'Limon',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'../svg/lemon-1.svg',
        stock: 4
    },
    {
        id: 'P004',
        categoria: "Frutos Secos",
        title: 'Coco',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'../svg/coconut.svg',
        stock: 20
    },
    {
        id: 'P005',
        categoria: "Verdura",
        title: 'Avellana',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'../svg/aubergine.svg',
        stock: 8
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

        },

        (error) => {/* {console.log(error) */
    }
    );

    return(
        <>
        {/* paso como parametro la imagen al otro componente */}
        {/* ${console.log(p)} */}
        {p.map(pro => <ItemCount title = {pro.title} pictureUrl = {pro.pictureUrl} categoria = {pro.categoria} stock = {pro.stock}/>)}
        </>
    )
}