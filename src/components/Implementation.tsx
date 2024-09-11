import Image from "next/image";
import Link from "next/link";


function Implementation() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center'>
        <div>
            <h2 className="section-heading">Implementation</h2>
        </div>
        <div className='mb-[40px]'>
            <div className='w-full h-full max-w-[350px] mb-[40px]'>
            <Image
            src='/images/Implementation.png'
            alt='Brainstrom'
            className="w-full h-auto  object-cover"
            width={600}
            height={600}/>
            </div>
        </div>
        <div className="text-left  max-w-[425px] mx-auto text-[16px] mb-[25px]">
            <p>Our team of skilled professionals carefully translate strategies into action, ensuring that each element is in place for a seamless digital experience. From web development and design to digital marketing campaigns, our experts work tirelessly to bring your vision to life. </p>
            <p>We believe in the power of attention to detail. Our implementation process is characterized by a thorough and methodical approach, leaving no stone unturned. Quality and excellence are at the forefront of everything we do.</p>
        </div>
        <div className="flex items-center max-w-[425px] w-full mx-auto">
        <Link href="/contactus">
          <button className="py-3 px-10 bg-black text-white hover:bg-gray-800 transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>
        <div></div>
    </div>
  )
}

export default Implementation