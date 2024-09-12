import Image from 'next/image';
import Link from 'next/link';
import ContactButton from './ContactButton';
import ImageContainer from './ImageContainer';

function Brainstorm() {
  return (
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
  );
}

export default Brainstorm;
