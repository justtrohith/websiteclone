import Link from 'next/link';

interface ButtonProps {
  
  theme?: 'light' | 'dark';
}

function ContactButton({ theme = 'light' }) {
    const buttonClass = theme === 'dark' 
    ? 'bg-black text-white ' 
    : 'bg-white text-black ';

  return (
    <Link href="/contactus">
      <button className={`py-3 px-10 ${buttonClass} transition-all duration-300`}>
        Contact Us
      </button>
    </Link>
  );
};

export default ContactButton