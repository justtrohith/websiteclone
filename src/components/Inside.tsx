import Image from "next/image"
import ImageContainer from "./ImageContainer"


function Inside() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center dark-part'>
        <div>
            <h2 className='section-heading max-w-[250px] custom-480:max-w-[400px] md:max-w-[500px] lg:max-w-[800px]' >Inside our
            client’s minds</h2>
        </div>
        <ImageContainer src='/images/Inside.png' alt='Inside'/>
        </div>
  )
}

export default Inside