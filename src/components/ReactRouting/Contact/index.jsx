const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-white mb-8">
          Get in touch with us. We love to hear from you!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700">123 Main Street</p>
          <p className="text-gray-700">City, State, ZIP</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Email: info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
