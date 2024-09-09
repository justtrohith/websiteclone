

function ChatWithUs() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 h-screen">
      {/* Left Section - Image and Text */}
      <div className="flex items-center flex-col  space-x-8">
        {/* Image */}
        <img
          src="/images/Image-ChatWithUs.png"
          alt="Chat Illustration"
          className="w-1/2 h-auto mb-5 object-left"
        />

        {/* Text */}
        <h2 className="text-9xl font-bold">Chat with us</h2>
      </div>

      {/* Right Section - Button */}
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