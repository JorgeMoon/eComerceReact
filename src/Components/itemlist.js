

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
        pictureUrl:'https://www.flaticon.es/svg/vstatic/svg/4264/4264575.svg?token=exp=1616547080~hmac=47177da266eae7e995166498b0571cc8',
        stock: 13
    },
    {
        id: 'P003',
        categoria: "Citricos",
        title: 'Limon',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://www.flaticon.es/svg/vstatic/svg/4264/4264563.svg?token=exp=1616547035~hmac=f46b53e31715989185a8c207cb08bf60',
        stock: 4
    },
    {
        id: 'P004',
        categoria: "Frutos Secos",
        title: 'Coco',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://www.flaticon.es/svg/vstatic/svg/4264/4264794.svg?token=exp=1616547035~hmac=bf5bf3f26f83c526455c24e537bacbcb',
        stock: 20
    },
    {
        id: 'P005',
        categoria: "Frutos Secos",
        title: 'Avellana',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '6548',
        pictureUrl:'https://www.flaticon.es/svg/vstatic/svg/4264/4264750.svg?token=exp=1616547035~hmac=7d9f5a25610c6a4162ef6868d21d18e7',
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