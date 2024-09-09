import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col items-center justify-center p-[40px]'>
        <div className='mb-2'>
            <h6 className='font-prata text-[20px] uppercase tracking-widest mb-2'>Hello & welcome to</h6>
        </div>
        <div className='align-middle w-[750px] mb-[30px]' >
            <h1 className='font-prata text-[130px] font-black text-center tracking-wider leading-tight mb-[30px]'>Digital Solutions </h1>
            
        </div>
        <div>
            <div className='w-[700px] h-[700px] bg-black'>
            
            </div>
        </div>
    </div>
  )
}

export default Banner