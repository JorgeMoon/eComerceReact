import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from './itemdetail'


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


const getItems = (id) => { /* Esta función debe retornar la promesa que resuelva con delay */ 
  return  new Promise((resolve)=>{
      setTimeout(()=>{resolve(
        products.filter((obj) =>{
         console.log(obj.id === id)
          return obj.id === id
      } ) 
      )
  
    },2000)
  
  
  })
}

export function ItemDetailContainer() {
  //hooks
  const [item, setItem] = useState([]);
  const {itemId} = useParams(); //parametro del a URL
 // console.log(useParams())
 

  useEffect(() => {
      getItems(itemId).then((res)=> setItem(res))
      return;
  }, [itemId])

  // Implementar mock invocando a getItems() y utilizando el resolver then

    console.log(item)
   return(
   <> 
   <h1>DETALLE</h1>
   <h2>{itemId}</h2>
   
   <ItemDetail item={item} />
     
   </>/* JSX que devuelva un ItemDetail (desafío 6b) */
   )
  }