import React from 'react';
import './pharma.css'

const Pharma = (props) => {
   const { name, img, description, subName, price, power } = props.data
   return (
      <div className='m-4 w-75 mx-auto'>
         <div className='d-lg-flex p-4 align-items-center justify-content-center custom'>
            <div className='col'>
               <img width='150px' src={img} alt="" />
            </div>
            <div className='col px-3'>
               <h3>{name} <small className='fs-6'>{power}</small></h3>
               <h5>{description}</h5>
               <h4>Price: {price}</h4>
               <h6>Generic Name; {subName}</h6>
            </div>
         </div>
      </div>

   );
};

export default Pharma;