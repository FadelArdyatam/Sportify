
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 mb-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h1 className="text-3xl font-bold italic">SPORTIFY</h1>
          <p className="mt-4 font-semibold">Newsletter Signup</p>
          <form className="mt-4">
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email address"
                aria-label="Email"
              />
              <button className="text-gray-500" type="submit">
                ➜
              </button>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-500 bg-transparent border-gray-500"
                />
                <span className="ml-2">
                  I agree to the{' '}
                  <a href="#" className="text-gray-400 underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
          </form>
        </div>

        <div className="md:flex md:space-x-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Socials</h2>
            <ul>
              <li><a href="#" className="hover:text-SecondaryColor">Facebook</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">Twitter</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">Dribble</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">Instagram</a></li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul>
              <li><a href="#" className="hover:text-SecondaryColor">Home</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">Services</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">About Us</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">Shop</a></li>
              <li><a href="#" className="hover:text-SecondaryColor">Contacts</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Say Hello</h2>
            <p><a href="mailto:info@email.com" className="hover:text-SecondaryColor">ardyatamafadel68@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          Sportify © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
