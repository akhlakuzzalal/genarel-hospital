import React from 'react';
import './pharma.css'

const Pharma = (props) => {
   const { name, img, description, subName, price, power } = props.data
   return (
      <div className='m-4 w-75 mx-auto'>
         <div className='d-flex custom align-items-center justify-content-cemter'>
            <div>
               <img width='150px' src={img} alt="" />
            </div>
            <div className='ms-4'>
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