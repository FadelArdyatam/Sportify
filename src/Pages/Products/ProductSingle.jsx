import { useParams } from 'react-router-dom';
import productsData from './productData.json';

const customerReviews = [
  {
    name: "Ahmad Alkatiri",
    rating: 5,
    review: "Absolutely love this gym set! It's exactly what I needed for my home workouts."
  },
  {
    name: "Ibnu Khaldun",
    rating: 4,
    review: "'Great quality and easy to use. The adjustable settings are fantastic!'"
  },
  {
    name: "Alex Johnson",
    rating: 5,
    review: "Highly recommend this set for anyone serious about their fitness goals."
  }
];


const ProductSingle = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="my-7 py-10 bg-gray-white dark:bg-dark text-black dark:text-white">
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
        <div className="max-w-7xl mx-auto bg-white dark:bg-black rounded-lg flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <img
              className="items-center w-full h-96 object-cover sm:rounded-lg rounded-t-xl lg:rounded-l-lg"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>

          {/* Product Details and Checkout */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
              <p className="text-gray-400 mb-4">
                Status: <span className="text-green-500">{product.status}</span>
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
                <span className="text-2xl font-semibold">{product.price}</span>
                <button className="primary-btn">Buy Now</button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Product Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Product Details</h3>
                <p className="text-gray-400">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="max-w-7xl mx-auto bg-white dark:bg-black rounded-lg shadow-lg mt-8 p-6">
          <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-primary/50 p-4 rounded-lg">
                <p className="text-lg font-semibold">{review.name}</p>
                <p className="text-gray-400">
                  {"⭐".repeat(review.rating)}
                </p>
                <p className="text-black dark:text-gray-400 mt-2">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
