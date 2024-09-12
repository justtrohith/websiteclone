import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";
import ImageContainer from "./ImageContainer";


function Implementation() {
  return (
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
  )
}

export default Implementation