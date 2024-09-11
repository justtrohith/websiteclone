import Image from "next/image"


function Inside() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center bg-black'>
        <div>
            <h2 className='section-heading text-white max-w-[250px] custom-480:max-w-[400px] md:max-w-[500px] lg:max-w-[800px]' >Inside our
            client’s minds</h2>
        </div>
        <div className='mb-[40px]'>
        <div className='w-full h-full max-w-[350px]'>
            <Image
            src='/images/Inside.png'
            alt='Brainstrom'
            className="w-full h-auto  object-cover"
            width={600}
            height={600}/>
            </div>
        </div>
        
    </div>
  )
}

export default Inside