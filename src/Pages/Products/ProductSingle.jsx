import Footer from "../../Components/Footer/Footer";
const ProductSingle = () => {
  return (
  <div>
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-7xlmx-auto bg-white dark:bg-black rounded-lg shadow-lg flex flex-col lg:flex-row">
        {/* Gambar Produk */}
        <div className="lg:w-1/2">
          <img
            className="items-center w-full h-96 object-cover sm:rounded-lg rounded-t-xl lg:rounded-l-lg "
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
            alt="Gym Equipment"
          />
        </div>

        {/* Detail Produk dan Checkout */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ultimate Gym Set</h2>
            <p className="text-gray-400 mb-4">
              Status: <span className="text-green-500">Available</span>
            </p>
            <div className="mb-4">
              <p className="text-lg">Select Delivery Date:</p>
              <input
                type="date"
                className="bg-primary/70 text-white p-2 rounded-md w-full mt-2"
              />
            </div>
            <div className="mb-4">
              <p className="text-lg">Shipping Options:</p>
              <select className="bg-primary/70 text-white p-2 rounded-md w-full mt-2">
                <option>Standard Shipping - Free</option>
                <option>Express Shipping - $9.99</option>
                <option>Next-Day Shipping - $19.99</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-semibold">$199.99</span>
              <button className="primary-btn">
                Buy Now
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Product Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-400">
                <li>High-quality steel construction</li>
                <li>Adjustable weight settings</li>
                <li>Compact and portable design</li>
                <li>Includes a workout guide</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Product Details</h3>
              <p className="text-gray-400">
                This gym set includes state-of-the-art equipment designed to
                maximize your workout efficiency. Perfect for both beginners and
                pros. Compact and durable, it's ideal for home use or on the go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ulasan Pelanggan */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-black rounded-lg shadow-lg mt-8 p-6">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          <div className="bg-primary/50 p-4 rounded-lg">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-400">⭐⭐⭐⭐⭐</p>
            <p className="text-black dark:text-gray-400 mt-2">
              "Absolutely love this gym set! It's exactly what I needed for my
              home workouts."
            </p>
          </div>
          <div className="bg-primary/50 p-4 rounded-lg">
            <p className="text-lg font-semibold">Jane Smith</p>
            <p className="text-gray-400">⭐⭐⭐⭐</p>
            <p className="text-black dark:text-gray-400 mt-2">
              "Great quality and easy to use. The adjustable settings are
              fantastic!"
            </p>
          </div>
          <div className="bg-primary/50 p-4 rounded-lg">
            <p className="text-lg font-semibold">Alex Johnson</p>
            <p className="text-gray-400">⭐⭐⭐⭐⭐</p>
            <p className="text-black dark:text-gray-400 mt-2">
              "Highly recommend this set for anyone serious about their fitness
              goals."
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
  );
};

export default ProductSingle;
