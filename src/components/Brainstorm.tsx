
import Link from 'next/link'

function Brainstorm() {
  return (
    <div className='px-[20px] py-[90px] flex flex-col items-center justify-center'>
        <div>
            <h2 className='text-[100px] mb-[30px]'>Brainstrom</h2>
        </div>
        <div className='mb-[40px]'>
            <div className='w-[350px] h-[350px] bg-black'></div>
        </div>
        <div>
            <p className='max-w-md text-left mb-[25px]'>At Digital Solutions, innovation and creative thinking are at the heart of our success. Our brainstorming sessions are the incubators of ingenious ideas. We gather our team of creative minds, each bringing a unique perspective to the table, and explore uncharted territories in the digital realm.</p>
            <p className='max-w-md text-left mb-[25px]'>During a brainstorm, we delve into your goals and challenges, breaking down barriers to uncover inventive solutions and generateing a spectrum of concepts and strategies.</p>
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

export default Brainstorm