import Image from "next/image"
import ImageContainer from "./ImageContainer"


function Design() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center dark-part'>
        <div>
            <h2 className="section-heading" >Design</h2>
        </div>
        <ImageContainer src='/images/Design.png' alt='Brainstrom'/>
        <div className="text-left  max-w-[425px] mx-auto">
            <p >Its our commitment to delivering more than just services; it&#39;s about delivering results. Whether you&#39;re a startup with big dreams or an established brand looking for a fresh perspective, we&#39;re here to take your digital presence to the next level.</p>
            <p >From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and we&#39;re here to guide you through the ever-changing world of digital possibilities.

</p>
        </div>
    </div>
  )
}

export default Design