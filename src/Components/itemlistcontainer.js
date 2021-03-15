import React from 'react';
import {ItemCount} from './itemcount'

export const ItemListContainer = (props) =>{
    return(
        <>
        <h1>{props.greeting}</h1>
        <br/>
        <div  className="d-flex justify-content-center">
        <ItemCount/>
        </div>
       
        </>
    );
};