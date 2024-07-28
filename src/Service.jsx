import React from 'react'
import img1 from './resource/img1.jpg'
import img2 from './resource/img2.jpg'
import img3 from './resource/img3.jpg'

const Service = () => {
  return (
    <div>
        <section className='mt-16'>
        <h1 className='text-left mx-4 my-4 text-5xl font-medium '>Why Choose Us</h1>
        <div className='grid gap-4 md:grid-cols-3 grid-cols-1'>
          <div className='min-h-[300px] rounded hover:bg-orange-600 mx-4 bg-orange-300'>
            <img src={img1} alt="Service 1" className='h-64 p-4 w-full'/>
            <p className='text-2xl font-semibold'>Best service</p>
          </div>
          <div className='min-h-[300px] rounded hover:bg-orange-600 mx-4 bg-orange-300'>
            <img src={img2} alt="Service 2" className='h-64 w-full p-4' />
            <p className='text-2xl font-semibold'>Value for money</p>
          </div>
          <div className='min-h-[300px] rounded hover:bg-orange-600 mx-4 bg-orange-300'>
            <img src={img3} alt="Service 3" className='h-64 w-full p-4' />
            <p className='text-2xl font-semibold'>Quick response</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service