import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

    return (
        <nav className="bg-white  text-black dark:text-white dark:bg-black shadow-md flex">
            <div className="container mx-auto flex items-center justify-between p-4 relative ">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Darkmode />
                    <Link to="/" className="text-2xl font-bold italic">
                        SPORTIFY
                    </Link>
                </div>

                {/* Menu Button for smaller screens */}
                <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
                    <button
                        className=" text-white p-2 rounded-md "
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl text-black dark:text-white" />}
                    </button>
                </div>

                {/* Mobile Menu Pop-up */}
                <div
                    className={`fixed top-0 right-0 bg-gray-900 text-white p-4 h-full w-3/4 md:w-auto transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex justify-end mb-4">
                        <button
                            className="text-white  text-2xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-700 text-white p-2 rounded-md pl-10 w-full mb-4 focus:outline-none"
                    />
                    <Link to="/" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/products" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                    <Link to="/about" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                </div>

                {/* Desktop Menu Pop-up */}
                <div
                    className={`fixed top-0 right-0 bg-gray-900 text-white p-4 h-full w-3/4 md:w-1/4 transform transition-transform duration-300 ${isDesktopMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex justify-end mb-4">
                        <button
                            className="text-white text-2xl"
                            onClick={() => setIsDesktopMenuOpen(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-700 text-white p-2 rounded-md pl-10 w-full mb-4 focus:outline-none"
                    />
                    <Link to="/" className="block py-2 hover:text-primary transition" onClick={() => setIsDesktopMenuOpen(false)}>Home</Link>
                    <Link to="/products" className="block py-2 hover:text-primary transition" onClick={() => setIsDesktopMenuOpen(false)}>Products</Link>
                    <Link to="/about" className="block py-2 hover:text-primary transition" onClick={() => setIsDesktopMenuOpen(false)}>About Us</Link>
                    <Link to="/Contact" className="block py-2 hover:text-primary transition" onClick={() => setIsDesktopMenuOpen(false)}>Contact Us</Link>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                
                    <Link to="/cart" className=" hidden md:flex">
                        <FaShoppingCart className="text-2xl hover:text-primary" />
                    </Link>
                    <Link to="/profile">
                        <FaUser className="text-2xl hover:text-primary" />
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            className="dark:text-white text-black p-2 rounded-md hover:bg-primary"
                            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                        >
                            {isDesktopMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <Link to="/profile">
                            <FaUser className="text-2xl text-white dark:text-black" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
