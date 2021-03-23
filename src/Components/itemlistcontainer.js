import React from 'react';

import {ItemList} from './itemlist';

export const ItemListContainer = (props) =>{
    return(
        <>
        <h1>{props.greeting}</h1>
        <br/>
        <div  className="d-flex justify-content-center">
        
        <ItemList/>
        </div>
       
        </>
    );
};