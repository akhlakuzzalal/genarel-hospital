import React, { useEffect, useState } from 'react';
import Pharma from './Pharma';

const Pharmacy = () => {
   const [medicines, setMedicines] = useState([]);

   useEffect(() => {
      fetch('./medicine.json')
         .then(res => res.json())
         .then(data => setMedicines(data));
   }, []);
   return (
      <div>
         <h1 className='bg-dark text-light py-2 text-center'>Important Medicine For regular Life</h1>
         {
            medicines.map(medi => <Pharma data={medi} key={medi.id}></Pharma>)
         }
      </div>
   );
};

export default Pharmacy;