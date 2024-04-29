import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 px-12 pt-4 flex items-center justify-between h-fit w-full'>
        <img src='../logo.png' className='h-[44px] w-[44p]' alt="" />
        <div className='flex gap-4 items-center'>
          <button className='text-[1vw] px-4 py-1 border-[1px] rounded-full border-[#527AE6] text-white'>Book a Demo</button>
          {/* <button className='text-[2vw] px-3 py-0 border-[1px] rounded-full border-[#527AE6] text-white'>-</button> */}
          <button className='text-white pb-2 text-[3vw]'>=</button>
        </div>
    </div>
  )
}

export default Navbar