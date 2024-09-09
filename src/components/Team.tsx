import React from "react";

interface TeamMember {
    name: string;
    description: string;
    imageSrc: string;
    textColor: string; 
    bgColor: string;
    reverse?: boolean; 
  }

  const teamMembers: TeamMember[] = [
    
    {
      name: 'Jessica',
      description: `Jessica is an accomplished leader and visionary, serving as the CEO of Digital Solutions, a cutting-edge marketing agency at the forefront of digital innovation. With a relentless commitment to driving business growth and a passion for excellence, Jessica brings a wealth of expertise to the helm of our organization.`,
      imageSrc: '/images/Jessica-Image.jpg',
      textColor: 'text-white',  
      bgColor: 'bg-black', 
      reverse: true, 
    },
    {
        name: 'Mike',
        description: `Mike is the creative genius behind Digital Solutions, holding the role of Head of Creative Design. With a flair for innovation and an eye for aesthetics, he plays a pivotal role in bringing our clients' brands to life. Mike's journey in the design world began at a young age, and his passion for creativity has only grown stronger with time. With years of experience, Michael has honed his skills in graphic design, web design, and user interface development, ensuring that every design element aligns with the latest industry standards.`,
        imageSrc: '/images/Mike-Image.jpg',
        textColor: 'text-black',  
        bgColor: 'bg-white',
      },
    {
        name: 'Sarah',
        description: `Sarah is a digital marketing strategist extraordinaire at Digital Solutions. With a penchant for data-driven decision-making and a deep understanding of the digital marketing landscape, she's the driving force behind our clients' online success. Sarah's journey in the marketing world began with a fascination for the power of data and its ability to transform businesses. Rasah stays nimble in the fast-paced digital environment, constantly adjusting strategies to leverage the latest trends and technologies.`,
        imageSrc: '/images/Sara-Image.jpg',
        textColor: 'text-white',  
        bgColor: 'bg-black',
        reverse: true,
      },
    
  ];

function Team() {
  return (
    <div>
        <div className='px-[20px] py-[90px] flex flex-col items-center justify-center bg-black'>
        <div className="w-[600px]">
            <h2 className='text-[100px] mb-[30px] text-white text-center' >Meet the team Behind</h2>
        </div>
        <div className='mb-[40px]'>
            <div className='w-[350px] h-[350px] bg-white'></div>
        </div>
        
    </div>
        <div >
        {teamMembers.map((member, index) => (
            <div
            key={index}
            className={`flex flex-col md:flex-row ${member.reverse ? 'md:flex-row-reverse' : ''} ${member.textColor} ${member.bgColor} items-center `}
            >
            
            <div className="md:w-1/2 p-8">
                <h2 className="text-5xl font-bold mb-4">{member.name}</h2>
                <p className="text-lg">{member.description}</p>
            </div>

            
            <div className="w-1/2">
                <img
                src={member.imageSrc}
                alt={member.name}
                className="w-full h-auto  object-cover"
                />
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Team