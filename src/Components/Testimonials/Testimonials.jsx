import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Paldiy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem. asprenatur, magnam tenetur odio quo et molestias",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Bujank",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem. asprenatur, magnam tenetur odio quo et molestias",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Tyas Hutama",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem. asprenatur, magnam tenetur odio quo et molestias",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "Sarah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem. asprenatur, magnam tenetur odio quo et molestias",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
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
    <div className="py-10 my-10 mx-0">
      <div className="container">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl text-center sm:text-5xl font-bold text-primary">
            Testimonials
          </h1>
        </div>

        {/* Slider Section */}
        <Slider {...settings}>
          {TestimonialsData.map((data) => (
            <div key={data.id}>
              <div className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10">
                  <div className="mb-4">
                    <img
                      src={data.image}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs font-serif text-primary/20 dark:text-white">
                        {data.text}
                      </p>
                      <p className="text-black/80 dark:text-white">
                        {data.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-9xl text-gray-500 absolute top-0 right-0 font-serif text-primary/20">
                    {" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
