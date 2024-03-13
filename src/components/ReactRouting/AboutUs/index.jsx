const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg text-white mb-8">
          Learn more about our company and what we stand for.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            augue nec sapien ullamcorper blandit. Phasellus eu magna nulla.
            Nulla facilisi.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Our Team</h2>
          <ul className="list-disc text-gray-700">
            <li>M Ali Gohar</li>
            <li>Muzamil</li>
            <li>Ateeq</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
