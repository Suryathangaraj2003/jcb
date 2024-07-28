import React, { useEffect, useRef, useState } from 'react';
import jcbImg from './resource/jcb.png';

import FormComponent from './Form';
import Service from './Service';





const LandingPage = () => {

  const [color, setColor] = useState("");
  const formRef = useRef(null);

  

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='landing top-0'>
      
      <div className='grid gap-8 my-4 mx-4 mt-20 md:grid-cols-2 md:items-center md:text-left md:mt-28'>
        <div>
          <img src={jcbImg} alt="JCB" className='w-full rounded-lg bg-gray-500 z-10' />
        </div>
        <div>
          <h1 className='text-7xl font-bold md:mb-8 md:ml-32 items-center justify-center text-center md:mr-20 text-yellow-600'>TMP EARTH MOVERS</h1>
          <a href="https://www.google.com/maps/place/11%C2%B015'27.6%22N+76%C2%B053'25.0%22E/@11.2576761,76.8877068,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.2576761!4d76.8902817?hl=en&entry=ttu" className='underline'>
          <h3 className='text-center text-xl flex items-center justify-center flex-row p-2'>
            <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
            </svg>
            Location: METTUPALAYAM
          </h3>
          </a>
          <p className='flex items-center justify-center  text-left text-lg md:px-4'>
            TMP earth movers offers high-performance construction equipment vehicle in Coimbatore at reasonable rates. We offer transparent service that consistently results in greater than 100% customer satisfaction
          </p>
          <p className='text-left text-lg md:px-4'>Our primary focus is consistently offering our clients high-quality services, timely delivery, and flexible rental terms at affordable rates</p>
          <button 
            className='rounded bg-cyan-600 text-2xl font-semibold w-34 p-2 justify-center items-center text-center mt-4 md:mt-18 md:ml-4 hover:bg-blue-600 text-white'
            onClick={scrollToForm}
          >
            Contact us
          </button>
        </div>
      </div>

    
      <Service />
      <FormComponent ref={formRef} />
      
      
      
    </div>
  );
};

export default LandingPage;
