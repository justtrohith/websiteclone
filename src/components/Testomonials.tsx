import Link from "next/link"
import React from 'react';
import ContactButton from "./ContactButton";

interface Testimonials {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonials[] = [
    {
      quote: "Working with this design agency was a dream come true. They have an incredible eye for detail and a knack for delivering on time. Theyve elevated our brand to a whole new level.",
      name: "Mark Roberts",
      title: "CFO SynoByte Solutions",
    },
    {
      quote: "I had a vision for my brand, and this design agency brought it to life in ways I couldnt have imagined. Their creativity knows no bounds, and their attention to detail is unparalleled.",
      name: "Sarah Thompson",
      title: "PM NeuralLink Innovators",
    },
    {
      quote: "I was impressed by the design agencys ability to transform our ideas into visually stunning graphics. They are experts at making the abstract become tangible. Exceptional work!",
      name: "Lidia Truman",
      title: "CDO QuantumFusion Labs",
    },
    {
      quote: "The design agencys attention to detail is remarkable. Every aspect of our project was meticulously crafted, resulting in a design that not only looks great but also functions seamlessly.",
      name: "Augustin Collins",
      title: "CRO CloudCore Dynamics",
    },
  ];
  


function Testomonials() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center'>
        
        <div>
            <p className='max-w-md text-left mb-[25px]'>Its our commitment to delivering more than just services; its about delivering results. Whether youre a startup with big dreams or an established brand looking for a fresh perspective, were here to take your digital presence to the next level.</p>
            <p className='max-w-md text-left mb-[25px]'>From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and were here to guide you through the ever-changing world of digital possibilities.</p>
        </div>
        <div>
            <div className="max-w-[960px] mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-3">
                    {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-[#f8f8f8] rounded-lg  p-[20px] custom-480:p-[40px] lg:p-[55px]  "
                    >
                        <p className="text-[20px] custom-480:text-[22px] md:text-[26] leading-[30px] custom-480:leading-[34px] md:leading-[38px]  mb-[25px]">{testimonial.quote}</p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <ContactButton theme="dark"/>
    </div>
  )
}

export default Testomonials