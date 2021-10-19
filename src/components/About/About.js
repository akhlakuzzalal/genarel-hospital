import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const About = () => {
   const [detail, setDetail] = useState([]);
   const { id } = useParams();

   const { name, img, description } = detail

   useEffect(() => {
      fetch('../services.json')
         .then(res => res.json())
         .then(data => {
            const single = data.find(d => d.id === id)
            setDetail(single)
         })

   }, [])


   return (
      <div>
         <h1 className='bg-dark text-light py-2 text-center'>About Details For {name}</h1>
         <div className='w-75 mx-auto py-4'>
            <div className='row row-cols-lg-2 row-cols-1 align-items-center custom p-2'>
               <div className='col'>
                  <img height='200px' src={img} alt="" />
               </div>
               <div className='col'>
                  <h2>{name}</h2>
                  <p>{description}</p>
                  <Link to='/home' className='btn btn-warning'>Go Back</Link></div>
            </div>
         </div>
      </div>
   );
};

export default About;