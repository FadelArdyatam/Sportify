const Contact = () => {
  return (
    <div className="my-14 py-12 bg-gray-200 dark:bg-dark text-black dark:text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-primary">
          Contact Us
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-lg">
              We'd love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
            </p>
            <div>
              <h3 className="text-xl font-semibold">Email:</h3>
              <p className="text-lg">support@sportify.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone:</h3>
              <p className="text-lg">+6282116573216</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Address:</h3>
              <p className="text-lg">
                123 Fitness Ave, Workout City, Fitland
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="primary-btn w-full py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
