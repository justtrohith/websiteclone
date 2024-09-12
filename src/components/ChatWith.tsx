
import Link from 'next/link'
import React from 'react'
import ImageContainer from './ImageContainer'
import ContactButton from './ContactButton'

function ChatWith() {
  return (
    <div className='dark-part px-[20px] py-[90px] flex flex-col  justify-between  '>
        <div>
        <ImageContainer src="/images/Image-ChatWithUs.png" alt="Chat with us" />

       </div>
        <div className='flex flex-col md:flex-row md:justify-between md:items-end items-start'>
        
            <h2 className='section-heading'>Chat with us</h2>
            <ContactButton />
       
        </div>
    </div>
    
  )
}

export default ChatWith