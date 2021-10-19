import React from 'react';
import img from '../.././images/services/playStore.png'

const Footer = () => {
   return (
      <div className='bg-dark mx-auto'>
         <h1 className='text-center text-light pt-3'>Genaral Hospital</h1>
         <div className='ms-4 row row-cols-lg-3 row-cols-1 text-light pb-4'>
            <div className='col'>
               <h2 className="text-warning">Address</h2>
               <h4>Ajom Khan Goli</h4>
               <h4>Sher-E-Bangla0-Nagar</h4>
               <h4>Dhaka</h4>
            </div>
            <div className='col'>
               <h2 className="text-warning">Important Link</h2>
               <h4>Privacy Policy</h4>
               <h4>Contact US</h4>
               <h4>For Book a service</h4>
            </div>
            <div className='col'>
               <img width='200px' src={img} alt="" />
            </div>
         </div>
      </div>

   );
};

export default Footer;