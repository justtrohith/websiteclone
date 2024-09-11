import Image from 'next/image';
import Link from 'next/link';

function Brainstorm() {
  return (
    <div className="px-5 py-[60px] flex flex-col items-center justify-center">
      {/* Heading */}
      <div>
        <h2 className="text-[36px] text-center leading-[46px] custom-480:text-[60px] custom-480:leading-[70px] md:text-[68px] md:leading-[78px] lg:text-[120px] lg:leading-[125px]">Brainstorm</h2>
      </div>

      {/* Image/Placeholder */}
      <div className="">
        <div className="w-full h-full max-w-[350px] mb-[40px]">
            <Image 
            src='/images/Brainstorm.png'
            alt='Brainstrom'
            className="w-full h-auto  object-cover"
            width={600}
            height={600}/>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-left  max-w-[425px] mx-auto text-[16px] mb-[25px]">
        <p >
          At Digital Solutions, innovation and creative thinking are at the heart of our success. Our brainstorming sessions are the incubators of ingenious ideas. We gather our team of creative minds, each bringing a unique perspective to the table, and explore uncharted territories in the digital realm.
        </p>
        <p >
          During a brainstorm, we delve into your goals and challenges, breaking down barriers to uncover inventive solutions and generating a spectrum of concepts and strategies.
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center max-w-[425px] w-full mx-auto">
        <Link href="/contactus">
          <button className="py-3 px-10 bg-black text-white hover:bg-gray-800 transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Brainstorm;
