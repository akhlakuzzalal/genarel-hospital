import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Servises = () => {
   const [servises, setServices] = useState([]);

   useEffect(() => {
      fetch('./services.json')
         .then(res => res.json())
         .then(data => setServices(data));
   }, []);
   return (
      <div>
         <h1 className='bg-dark text-light py-2 text-center'>Popular Services</h1>
         <div className="row row-cols-lg-4 row-cols-1 g-3 ms-4 py-5">
            {
               servises.map(service => <Service service={service} key={service.id}></Service>)
            }
         </div>
      </div>
   );
};

export default Servises;