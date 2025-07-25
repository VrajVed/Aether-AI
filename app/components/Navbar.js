import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-center flex mt-2 sticky '>
        <div className=''></div>
          <ul className='justify-between flex p-4 w-xl rounded-md border-2 sticky border-neutral-400/20  text-neutral-200 backdrop:blur-[1px] bg-neutral-400/20 transition-0.3'>
            <li className='hover:text-neutral-50 cursor-pointer'>Features</li>
            <li className='hover:text-neutral-50 cursor-pointer'>Testimonials</li>
            <li className='hover:text-neutral-50 cursor-pointer'>Pricing</li>
            <li className='hover:text-neutral-50 cursor-pointer'>About us</li>
            <button className='hover:bg-green-900 text-white cursor-pointer pl-2 pr-2 bg-green-700 rounded-md'>Get Started</button>
        </ul>
    </div>
  )
}

export default Navbar