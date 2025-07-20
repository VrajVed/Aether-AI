import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-center flex mt-2 '>
        <div className=''></div>
          <ul className='justify-between shadow-2xl/20  shadow-green-500 flex p-4 w-xl rounded-md border-2 border-neutral-400/20  text-neutral-200 backdrop:blur-[1px] bg-neutral-400/20 transition-0.3'>
            <li className='hover:text-neutral-50 cursor-pointer'>Features</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>About us</li>
        </ul>
    </div>
  )
}

export default Navbar