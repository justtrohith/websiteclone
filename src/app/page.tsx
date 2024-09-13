import ContactButton from '@/components/ContactButton';
import ImageContainer from '@/components/ImageContainer';

import Inside from "@/components/Inside";

import Skills from "@/components/Skills";
import Team from "@/components/Team";
import Testomonials from "@/components/Testomonials";

import Image from "next/image";








export default function Home() {
  return (
    <div>
      {/* Heading */}
        <div className="p-5 mt-16 flex items-center justify-center">
          <div className='w-[120px]'>
            <ImageContainer src='/images/Image-Logo.webp' alt='Logo' />
          </div>
        
           
        </div>

      {/* Banner */}
          <div className="flex flex-col items-center justify-center pt-10 px-5">
          
          <div className="mb-2">
            <h6 className="font-prata text-[17px] tracking-[5px] text-center custom-480:text-[20px] custom-480:leading-[30px] lg:text-[25px] lg:tracking-[5px]">
              HELLO & WELCOME TO
            </h6>
          </div>

          
          <div className="w-full mb-[30px]">
            <h1 className="text-[55px] font-black text-center sm:text-[100px] md:text-[140px] lg:text-[200px] ">
              Digital Solutions
            </h1>
          </div>

          
          <div className="w-full h-full max-w-[700px]">
            <Image 
            src='/images/Brainstorm.png'
            alt='Brainstrom'
            className="w-full h-auto  object-cover"
            width={600}
            height={600}/>
          </div>
        </div>

      
      {/* Brainstorm */}
          <div className="px-5 py-[60px] flex flex-col items-center justify-center">
          
            <div>
                <h2 className="section-heading">Brainstorm</h2>
            </div>

          
            <ImageContainer src='/images/Brainstorm.png' alt='Brainstrom'/>

            <div className="text-left  max-w-[425px] mx-auto text-[16px] mb-[25px]">
            <p >
              At Digital Solutions, innovation and creative thinking are at the heart of our success. Our brainstorming sessions are the incubators of ingenious ideas. We gather our team of creative minds, each bringing a unique perspective to the table, and explore uncharted territories in the digital realm.
            </p>
            <p >
              During a brainstorm, we delve into your goals and challenges, breaking down barriers to uncover inventive solutions and generating a spectrum of concepts and strategies.
            </p>
          </div>

          <ContactButton theme='dark'/>
        </div>

      {/* Design */}
            <div className='px-[20px] py-[90px] flex flex-col items-center justify-center dark-part'>
              <div>
                  <h2 className="section-heading" >Design</h2>
              </div>
              <ImageContainer src='/images/Design.png' alt='Brainstrom'/>
              <div className="text-left  max-w-[425px] mx-auto">
                  <p >Its our commitment to delivering more than just services; it&#39;s about delivering results. Whether you&#39;re a startup with big dreams or an established brand looking for a fresh perspective, we&#39;re here to take your digital presence to the next level.</p>
                  <p >From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and we&#39;re here to guide you through the ever-changing world of digital possibilities.</p>
              </div>
            </div>

      {/* Implementation*/}
          <div className='px-[20px] py-[90px] flex flex-col items-center justify-center'>
            <div>
                <h2 className="section-heading">Implementation</h2>
            </div>
            <ImageContainer src='/images/Implementation.png'  alt='Brainstrom'/>
            <div className="text-left  max-w-[425px] mx-auto text-[16px] mb-[25px]">
                <p>Our team of skilled professionals carefully translate strategies into action, ensuring that each element is in place for a seamless digital experience. From web development and design to digital marketing campaigns, our experts work tirelessly to bring your vision to life. </p>
                <p>We believe in the power of attention to detail. Our implementation process is characterized by a thorough and methodical approach, leaving no stone unturned. Quality and excellence are at the forefront of everything we do.</p>
            </div>
            <ContactButton theme="dark"/>
            <div></div>
          </div>

      <Inside/>
      <Testomonials/>
      <Team/>
      <Skills/>

      {/* ChatWith*/}
          <div className='dark-part px-[20px] py-[90px] flex flex-col  justify-between  '>
            <div>
            <ImageContainer src="/images/Image-ChatWithUs.png" alt="Chat with us" />
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-end items-start'>
            
                <h2 className='section-heading'>Chat with us</h2>
                <ContactButton />
          
            </div>
          </div>
      

      
    </div>
  );
}
