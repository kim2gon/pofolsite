import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-center justify-between gap-9 top-0 w-[1300px] max-w-[100vw] max-h-[100px] py-[29px] px-2 fixed'>
      <a href='#App.js' className='text-[30px] text-black text-left'>HEADER</a>
      <div className='text-[30px] bg-yellow-300 text-black'>SNS IMG</div>
      <a href='#App.js' className='pt-4 pb-[10px] px-7 text-white bg-black relative min-w-[16px] text-center text-sm leading-tight font-semibold'>KHG PortFolio</a>
    </nav>
  )
}

export default Header