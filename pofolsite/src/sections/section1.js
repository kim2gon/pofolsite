import React from 'react'

const Section1 = () => {
  return (
    <section className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative">
      <div className='w-[460px] pt-[10vh] px-0 pb-0 '>
        <h1 className='text-[109px] font-semibold text-left w-[460px] leading-tight'>Portfolio</h1>
        <div className='w-60 h-32'>
          <p className='mx-10 my-4 max-w-60 gap-8 grid justify-items-center font-medium text-[11px] leading-tight tracking-tight text-[#111]'>this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my site thank you.
            <a className='pt-4 pb-[10px] px-7 text-white bg-black relative min-w-[16px] text-center text-sm leading-tight font-semibold'>click my profile</a>
          </p>
          <p className='max-w-[200px] top-[150px] right-[85px] font-medium text-[11px] leading-tight tracking-tight text-[#111] absolute'>this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my site thank you.</p>
          <div>
            <span className='font-bold text-[36px] leading-tight whitespace-nowrap'>9999</span>
            <label>Collection Size</label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1