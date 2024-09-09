import Link from "next/link";


function Implementation() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center'>
        <div>
            <h2 className='text-[100px] mb-[30px]'>Implementation</h2>
        </div>
        <div className='mb-[40px]'>
            <div className='w-[350px] h-[350px] bg-black'></div>
        </div>
        <div>
            <p className='max-w-md text-left mb-[25px]'>Our team of skilled professionals carefully translate strategies into action, ensuring that each element is in place for a seamless digital experience. From web development and design to digital marketing campaigns, our experts work tirelessly to bring your vision to life. </p>
            <p className='max-w-md text-left mb-[25px]'>We believe in the power of attention to detail. Our implementation process is characterized by a thorough and methodical approach, leaving no stone unturned. Quality and excellence are at the forefront of everything we do.</p>
        </div>
        <div className='items-start'>
            <Link href={"/contactus"}>
                <button className='py-[10px] px-[55px] bg-black text-white'>Contact Us</button>
            </Link>
        </div>
        <div></div>
    </div>
  )
}

export default Implementation