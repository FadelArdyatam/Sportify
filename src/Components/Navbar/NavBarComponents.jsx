import { BiPhoneCall } from "react-icons/bi";
import DarkMode from "./Darkmode";
import ball from "/Images/logo_putih.png";

// eslint-disable-next-line react-refresh/only-export-components
export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/services",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/services",
  },
];

const NavBarComponents = () => {
  return (
    <>
      <nav className="shadow-md w-full dark:bg-dark dark:text-white">
        <div className="container mx-auto h-20">
          <div className="flex items-center justify-between py-1 h-full">
            <div className="items-center gap-2 hidden md:flex">
              <BiPhoneCall className=" text-2xl text-primary animate-pulse group-hover:scale-105 duration" />
              <span>Sportify</span>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <img
                src={ball}
                alt="ball"
                className=" w-10 sm:24 bg-black rounded-lg dark:bg-primary"
              />
            </div>
            <div className="items-center gap-1 hidden md:flex font-thin">
              <ul className="flex gap-2">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      href={link}
                      className="inline-block text-xs font-thin hover:text-primary duration-200"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="cursor-pointer p-1">
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponents;
