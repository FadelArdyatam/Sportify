import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const products = [
  {
    id: 1 ,
    name: "Ultimate Gym Set",
    price: "$199.99",
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    status: "Available",
    type: "purchase",
    description: "State-of-the-art gym equipment for your home workouts.",
  },
  {
    id: 2,
    name: "Pro Weight Lifting Kit",
    price: "$149.99",
    imageUrl: "https://th.bing.com/th/id/R.daeaa2914a32fb67a2137536500c7536?rik=99VnXRY7aHVnEg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-wUL_AC4FI_0%2fUceM1uh8xsI%2fAAAAAAAAAkA%2fQ9gE5l2-Qtw%2fs1600%2fmonolift1.jpg&ehk=yDvd9Cyzw2IJzvRJe7%2bYZwwO5Ryuim3z1zfttTblBZ8%3d&risl=&pid=ImgRaw&r=0",
    status: "Out of Stock",
    type: "purchase",
    description: "Durable weight lifting kit for serious training.",
  },
  {
    id: 3,
    name: "Adjustable Dumbbells",
    price: "$129.99",
    imageUrl: "https://th.bing.com/th/id/OIP.QGgo2Hu7wC9C21TucsWLBQHaGV?rs=1&pid=ImgDetMain",
    status: "Available",
    type: "purchase",
    description: "Compact dumbbells with adjustable weights.",
  },
  {
    id: 4,
    name: "Futsal Field Rental",
    price: "$50.00 / hour",
    imageUrl: "https://afesports.com/wp-content/uploads/2016/03/HF1-1.jpg",
    status: "Available",
    type: "rental",
    description: "Rent a futsal field for your games and events.",
  },
  {
    id: 5,
    name: "Senda Victoria Futsal Ball Rental",
    price: "$5.00 / day",
    imageUrl: "https://th.bing.com/th/id/OIP.XvhQ02JYyOcsS8Rm_k_DaQHaFj?rs=1&pid=ImgDetMain",
    status: "Available",
    type: "rental",
    description: "High-quality soccer balls available for rent.",
  },
  {
    id: 6,
    name: "Badminton Racket Rental",
    price: "$7.00 / day",
    imageUrl: "https://ae01.alicdn.com/kf/HTB12sbPPXXXXXXXapXXq6xXFXXXs/2017-Black-Badminton-Racket-Professional-Speed-Offensive-And-Defensive-Type-High-Quality-4U-Ultra-Light-Badminton.jpg",
    status: "Available",
    type: "rental",
    description: "Professional badminton rackets for rent.",
  },
  // Add more products here
];

const Products = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter(product => 
    filter === "all" || product.type === filter
  );

  return (
    <div className="font-poppins">
      <div className="bg-white dark:bg-black text-TextColor p-6">
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
                    to={`/products/${product.id}`}
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
        <Footer/>
    </div>
  );
};

export default Products;