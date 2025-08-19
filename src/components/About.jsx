const AboutUs = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About <span className="text-orange-600">Us</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are passionate about delivering quality products and outstanding customer experiences.
          Our mission is to bring innovation, creativity, and reliability to everyone.
        </p>
      </div>

      {/* Content Grid */}
     <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
  {/* Image */}
  <img
    src="/profile_pic.png"
    alt="Our Team"
    className="rounded-xl shadow-lg object-cover mx-auto"
  />

  {/* Text */}
  <div className="text-center md:text-left">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
    <p className="text-gray-600 mb-6">
      Founded in 2020, our company has been dedicated to building trust and providing 
      top-quality products to our customers. With a diverse and talented team, we aim 
      to create a positive impact on the world through innovation and sustainability.
    </p>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
    <ul className="list-disc pl-6 text-gray-600 space-y-2 inline-block text-left">
      <li>✅ Customer Satisfaction First</li>
      <li>✅ Innovation & Creativity</li>
      <li>✅ Integrity & Transparency</li>
      <li>✅ Sustainable Growth</li>
    </ul>
  </div>
</div>


      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mt-16">
        <div className="bg-orange-100 p-6 rounded-xl shadow-sm">
          <h4 className="text-3xl font-bold text-orange-600">5+</h4>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl shadow-sm">
          <h4 className="text-3xl font-bold text-orange-600">50+</h4>
          <p className="text-gray-600">Team Members</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl shadow-sm">
          <h4 className="text-3xl font-bold text-orange-600">200+</h4>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl shadow-sm">
          <h4 className="text-3xl font-bold text-orange-600">100%</h4>
          <p className="text-gray-600">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
