import { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Darkmode from './Darkmode';
import Cart from '../../Pages/Products/Cart';

const Navbar = ({ cartItems, onRemoveFromCart }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <nav className="bg-white text-black dark:text-white dark:bg-black shadow-md flex">
            <div className="container mx-auto flex items-center justify-between p-4 relative">
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
                        className="text-white p-2 rounded-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl text-black dark:text-white" />}
                    </button>
                </div>

                {/* Mobile Menu Pop-up */}
                <div
                    className={`fixed top-0 right-0 bg-gray-900 text-white p-4 h-full w-3/4 md:w-auto transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
                >
                    <div className="flex justify-end mb-4">
                        <button
                            className="text-white text-2xl"
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

                {/* Desktop Menu Button */}
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsCartMenuOpen(!isCartMenuOpen)} className="relative">
                        <FaShoppingCart className="text-2xl hover:text-primary" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-2 text-xs bg-primary text-white rounded-full px-1">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    <Link to="/profile">
                        <FaUser className=" text-2xl hover:text-primary mr-11 ml-0 sm:mr-0" />
                        <FaUser className=" text-2xl hover:text-primary sm:hidden hidden" />
                    </Link>
                    <FaBars className="text-2xl hover:text-primary hidden md:block" onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)} />
                </div>

                {/* Desktop Menu Pop-up */}
                <div
                    className={`fixed top-0 right-0 bg-gray-900 text-white p-4 h-full w-3/4 md:w-1/4 transform transition-transform duration-300 ${isDesktopMenuOpen ? 'translate-x-0' : 'translate-x-full'} hidden md:block z-50`}
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
                </div>

                {/* Cart Menu */}
                {isCartMenuOpen && (
                    <div className="fixed z-50 mr-0 mx-auto ">
                        <Cart
                            cartItems={cartItems}
                            onClose={() => setIsCartMenuOpen(false)}
                            onRemoveFromCart={onRemoveFromCart}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
