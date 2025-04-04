import React from 'react'

const Navbar = () => {
  const sectionText = [
    '01', '02', '03', '04', '05', '06'
  ]

  return (
    <div className='fixed right-[50px] bottom-[50px] grid z-10 mix-blend-difference text-[#111]'>
      <ul>
        {
          sectionText.map((v, i)=>(
            <li>
            <button className='mb-5 grid grid-flow-col items-center navastyle'>
              <span className='navfont1'>section</span>
              <span className='navfont2'>{v}</span>
            </button>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar