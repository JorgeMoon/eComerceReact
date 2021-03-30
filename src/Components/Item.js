import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './itemcount';
import {Card} from 'react-bootstrap';

export const Item = ({ item }) => {
  return (
      <>
    <Card style={{ width: '16rem' }}>
        <Card.Header  className="bg-dark text-white">{item.categoria}</Card.Header>
        <Card.Img variant="top" src = {item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to={`/item/${item.id}`}>Detalle</Link> {/* uso router */}       
            <ItemCount item={item}/>
        </Card.Body>
    </Card>

    </>
  );
};
