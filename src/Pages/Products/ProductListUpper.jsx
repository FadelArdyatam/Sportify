import Slider from "react-slick";
import { Link } from "react-router-dom";
const ProductListData = [
  {
    id: 1,
    name: "Bola",
    Link: "/Bola",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Bola Volly",
    Link: "BolaVolly",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Rompi Futsal",
    Link: "Pesan",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Bola Volly",
    Link: "Pesan",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 5,
    name: "Bola Volly",
    Link: "Pesan",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 5,
    name: "Bola Volly",
    Link: "Pesan",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 5,
    name: "Bola Volly",
    Link: "Pesan",
    img: "https://picsum.photos/103/106",
    delay: 1.1,
  },
  {
    id: 5,
    name: "Ariana",
    Link: "Pesan",
    img: "https://picsum.photos/103/107",
    delay: 1.1,
  },
];


const ProductListUpper = () => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 5,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [

      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-0">
      <div className="mx-auto container ">
        {/* header section */}
        <div className="text-center mb-10 max-w-[500px] mx-auto">
          <h1 className="text-4xl font-bold">
            What Are The Costumer Saying About Us
          </h1>
        </div>

        {/* Testimonials Cards */}
        <div>
          <Slider {...setting}>
            {ProductListData.map((data) => (
              <div key={data.id} className="my-0">
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10">
                  {/* upper section */}
                  <div className="justify-center items-center">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-lg w-52 h-52 shadow-lg"
                    />
                    <div className="">
                      <p className="text-xl font-bold text-black/80 mb-2">
                        {data.name}
                      </p>
                      <p className="primary-btn mb-2">
                        <Link to={data.Link}>Pesan</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductListUpper;
