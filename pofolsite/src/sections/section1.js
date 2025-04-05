import React from 'react'

const Section1 = () => {
  return (
    <section className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative">
      <div className='flex flex-col max-w-[460px] h-full pt-[10vh] px-0 pb-0 '>
        <h1 className='text-[109px] font-semibold text-left w-[460px] leading-tight'>Portfolio</h1>
        <p className='mx-10 my-4 max-w-60 gap-8 flex flex-col items-start justify-items-center font-medium text-[11px] leading-tight tracking-wide text-[#111] spac'>this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my site thank you.
          <a href='#App.js' className='pt-4 pb-[10px] px-7 text-white bg-black relative min-w-[16px] text-center text-sm leading-tight font-semibold'>click my profile</a>
        </p>
        <p className='max-w-[200px] top-[150px] right-[85px] font-medium text-[11px] leading-tight tracking-wide text-[#111] absolute'>this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my site thank you.</p>
        <div className='mt-auto mx-10 mb-0 flex flex-wrap gap-y-[42px] gap-x-[82px] overflow-hidden max-w-max'>
          <div className='flex flex-col gap-[5px]'>
            <span className='font-bold text-[36px] leading-tight whitespace-nowrap'>9,999</span>
            <label className='font-medium text-[10px] leading-tight whitespace-nowrap'>Collection Size</label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1