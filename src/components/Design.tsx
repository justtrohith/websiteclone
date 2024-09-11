import Image from "next/image"


function Design() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center bg-black'>
        <div>
            <h2 className="text-[36px] text-white   mb-[30px] text-center leading-[46px] custom-480:text-[60px] custom-480:leading-[70px] md:text-[68px] md:leading-[78px] lg:text-[120px] lg:leading-[125px]" >Design</h2>
        </div>
        <div className='mb-[40px]'>
            <div className='w-full h-full max-w-[350px]'>
            <Image
            src='/images/Design.png'
            alt='Brainstrom'
            className="w-full h-auto  object-cover"
            width={600}
            height={600}/>
            </div>
        </div>
        <div className="text-left  max-w-[425px] mx-auto text-white">
            <p >Its our commitment to delivering more than just services; it&#39;s about delivering results. Whether you&#39;re a startup with big dreams or an established brand looking for a fresh perspective, we&#39;re here to take your digital presence to the next level.</p>
            <p >From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and we&#39;re here to guide you through the ever-changing world of digital possibilities.

</p>
        </div>
    </div>
  )
}

export default Design