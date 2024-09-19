const PricingData = [
  {
    name: "Gold Card",
    price: "Rp.150.000",
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 months",
    aosDelay: "0",
  },
  {
    name: "Flexible Card",
    price: "Rp.250.000",
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 months",
    aosDelay: "500",
  },
  {
    name: "Platinum Card",
    price: "Rp.400.000",
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "Lifetime",
    aosDelay: "1000",
  },
];

const Pricing = () => {
  return (
    <div className="my-14 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-primary">
          Pricing
        </h1>

        {/* Card Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
          {PricingData.map((data, index) => (
            <div
              key={index}
              className="space-y-3 text-center bg-gray-200 dark:bg-dark text-black dark:text-white p-4 sm:py-16 
              rounded-lg group shadow-md dark:shadow-primary hover:bg-primary/20 dark:hover:bg-primary/50 duration-200"
            >
              <h1 className="text-3xl font-bold"> {data.name}</h1>
              <h1 className="text-4xl font-semibold text-primary">
                {data.price}
              </h1>
              {data.description.map((description, i) => (
                <p key={i}>{description}</p>
              ))}
              <p className="font-semibold text-xl py-3">
                Duration: {data.duration}
              </p>
              <button className="primary-btn"> Learn More </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
