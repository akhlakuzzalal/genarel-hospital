import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
   const { name, id, img, description } = props.service
   return (
      <div className='col'>
         <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text>
                  {description.slice(0, 150)}
               </Card.Text>
               <Button as={Link} to={`about/${id}`} variant="primary">About {name}</Button>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Service;