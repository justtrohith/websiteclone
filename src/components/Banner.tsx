import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 px-5">
      {/* Welcome Text */}
      <div className="mb-2">
        <h6 className="font-prata text-[17px] tracking-[5px] text-center custom-480:text-[20px] custom-480:leading-[30px] lg:text-[25px] lg:tracking-[5px]">
          HELLO & WELCOME TO
        </h6>
      </div>

      {/* Main Heading */}
      <div className="w-full mb-[30px]">
        <h1 className="text-[55px] font-black text-center sm:text-[100px] md:text-[140px] lg:text-[200px] ">
          Digital Solutions
        </h1>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-full max-w-[700px]">
        <Image 
        src='/images/Brainstorm.png'
        alt='Brainstrom'
        className="w-full h-auto  object-cover"
        width={600}
        height={600}/>
      </div>
    </div>
  );
}

export default Banner;
