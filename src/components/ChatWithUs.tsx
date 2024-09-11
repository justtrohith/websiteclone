import Image from "next/image"


function ChatWithUs() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 h-screen">
      
      <div className="flex items-center flex-col  space-x-8 ">
        
        <Image
          src="/images/Image-ChatWithUs.png"
          alt="Chat Illustration"
          className="w-1/2 h-auto mb-5 object-left"
          width={300}
          height={300}
          
        />

        
        <h2 className="text-9xl font-bold">Chat with us</h2>
      </div>

      
      <div>
        <a
            href="/contact"
            className="flex items-center bg-white text-black font-semibold py-3 px-6 "
            >Contact us
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">➔</span>
        </a>
    </div>

    </div>
  )
}

export default ChatWithUs