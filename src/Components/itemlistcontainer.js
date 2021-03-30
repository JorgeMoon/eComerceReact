import React, { useEffect, useState } from "react";
import {ItemList} from './itemlist';


let products = [
    {
        id: 'P001',
        categoria: "Frutas",
        title: 'Tomate',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '150',
        pictureUrl:'../svg/tomato.svg',
        stock: 17
    },
    {
        id: 'P002',
        categoria: "Frutas",
        title: 'Palta',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '80',
        pictureUrl:'../svg/avocado.svg',
        stock: 13
    },
    {
        id: 'P003',
        categoria: "Citricos",
        title: 'Limon',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '20',
        pictureUrl:'../svg/lemon-1.svg',
        stock: 4
    },
    {
        id: 'P004',
        categoria: "Frutos Secos",
        title: 'Coco',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '230',
        pictureUrl:'../svg/coconut.svg',
        stock: 20
    },
    {
        id: 'P005',
        categoria: "Verdura",
        title: 'Berenjena',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, odit dolor?',
        price: '60',
        pictureUrl:'../svg/aubergine.svg',
        stock: 8
    }
]; 

export const ItemListContainer = () =>{
   
    const [items, setItems] = useState([]);
    /* const {categoryId} = useParams(); */

        //Solicitud Asincronica 2s
    useEffect(
            ()=>{
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
    prom.then(
        (products) => {
            setItems(products)
        },
        (error) => {/* {console.log(error) */
    }
    );
    })

    return(
        <>
        {/* <h1>TITULO{categoryId}</h1> */}
        <br/>
        <div  className="d-flex justify-content-center"> 
            <ItemList items={items}/>
            {/* itemCoun lo llamo dentro de ItemList */}
        </div>
       
        </>
    );
};