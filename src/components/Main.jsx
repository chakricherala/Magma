import React from 'react'
import Navbar from './Navbar'

const Main = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className='relative w-full h-screen'>
      <div className='absolute top-0 px-12 pt-4 flex items-center justify-between h-fit w-full'>
        <img src='../logo.png' className='h-[44px] w-[44p]' alt="" />
        <div className='flex gap-4 items-center'>
          <button className='text-[1vw] px-4 py-1 border-[1px] rounded-full border-[#527AE6] text-white'>Book a Demo</button>
          {/* <button className='text-[2vw] px-3 py-0 border-[1px] rounded-full border-[#527AE6] text-white'>-</button> */}
          <button className='text-white pb-2 text-[3vw]'>=</button>
        </div>
    </div>
      <video autoPlay loop muted className="object-cover absolute -z-10 h-[100vh] w-[100vw]">
        <source src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2" type="video/mp4" />
      </video>
      <div className='flex flex-col absolute pb-4 text-white top-1/2 lg:bottom-20 left-10 lg:left-40 w-3/4 lg:w-1/2 z-20'>
        <div className='text-5xl leading-none'>
          <h1>Experience Real Estate Agility</h1>
        </div>
        <div className='grid grid-rows-2 lg:grid-cols-2 mt-2 w-3/4'>
          <div>
            <p>Create a Digital Twin Token (DTT®) of your existing building and release the potential of Web3.</p>
          </div>
          <div>
            <button className='border bottom-1 px-4 py-1 rounded-full mt-5'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main