import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/slider/slider1.jpg'
import img2 from '../../../images/slider/slider2.jpg'
import img3 from '../../../images/slider/slider3.jpg'

const Slider = () => {
   return (
      <div>
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3 className="text-dark">Genious Doctors</h3>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
               />

               <Carousel.Caption>
                  <h3 className="text-dark">Online Pharmasy</h3>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
               />

               <Carousel.Caption>
                  <h3 className='text-dark bold'>Lab Expertise</h3>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default Slider;