import { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from './productData.json'
const Products = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts = productsData.filter(product => 
    filter === "all" || product.type === filter
  );

  return (
    <div className="font-poppins">
      <div className="bg-white dark:bg-black text-TextColor p-6 mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">Product List</h1>
          
          {/* Filter Options */}
          <div className="mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-[#7B61FF] text-white" : "bg-gray-300 text-[#2E2A3B]"} hover:bg-[#6B4EDB] transition`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("purchase")}
              className={`px-4 py-2 rounded-md ${filter === "purchase" ? "bg-[#7B61FF] text-white" : "bg-gray-300 text-[#2E2A3B]"} hover:bg-[#6B4EDB] transition ml-2`}
            >
              Purchase
            </button>
            <button
              onClick={() => setFilter("rental")}
              className={`px-4 py-2 rounded-md ${filter === "rental" ? "bg-[#7B61FF] text-white" : "bg-gray-300 text-[#2E2A3B]"} hover:bg-[#6B4EDB] transition ml-2`}
            >
              Rental
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#373157] rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover image-hover"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">{product.name}</h2>
                  <p className="text-lg font-semibold mb-2 text-[#7B61FF]">{product.price}</p>
                  <p className={`text-lg ${product.status === "Available" ? "text-green-400" : "text-red-400"}`}>
                    {product.status}
                  </p>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <Link
                    to={`/Products/${product.id}`}
                    className="inline-block mt-4 px-4 py-2 bg-[#7B61FF] text-white rounded-md hover:bg-[#6B4EDB] transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
