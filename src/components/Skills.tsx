interface Service {
    title: string;
    description: string;
  }
  
  const services: Service[] = [
    {
      title: 'Digital Marketing Strategies',
      description:
        'We specialize in content creation and marketing, crafting engaging and relevant content that not only captivates your audience but also supports your digital marketing initiatives.',
    },
    {
      title: 'Web Design',
      description:
        'Digital Solutions offers professional web design services, ensuring that websites not only look great but also function effectively to meet the needs of clients and their target audience.',
    },
    {
      title: 'Social Media Management',
      description:
        'We create and curate engaging content, manage posting schedules, interact with your audience, and analyze performance metrics to ensure your brand\'s social media presence.',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Our experts can build, optimize, and manage your e-commerce platform, ensuring a seamless shopping experience for your customers and a solid online business growth.',
    },
  ];

function Skills() {
  return (
    <div className=" mx-auto py-24 px-5 flex flex-col md:flex-row">
      {/* Left Section - Skills & Services Title */}
      <div className="md:w-1/2">
        <h2 className="text-9xl font-bold mb-12">Skills & Services</h2>
      </div>

      {/* Right Section - Services */}
      <div className="md:w-1/2 space-y-12">
        {services.map((service, index) => (
          <div key={index} className="border-t pt-6">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
        <div className="border-t pt-6"></div>
      </div>
    </div>
  )
}

export default Skills