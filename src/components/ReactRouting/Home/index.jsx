const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-white mb-8">
          Discover the best of what we have to offer.
        </p>
        <img
          src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome"
          className="rounded-lg shadow-lg mx-auto mb-8"
          style={{ maxWidth: "500px" }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            augue nec sapien ullamcorper blandit. Phasellus eu magna nulla.
            Nulla facilisi.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc text-gray-700">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
