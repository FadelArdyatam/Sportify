import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onClose, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-fit bg-white dark:bg-gray-800 shadow-lg z-50 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black dark:text-white">Your Cart</h2>
        <button onClick={onClose} className="text-2xl text-black dark:text-white">
          <FaTimes />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
              <div>
                <p className="text-lg text-black dark:text-white">{item.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{item.quantity} x {item.price}</p>
              </div>
              <button
                onClick={() => onRemoveFromCart(index)}
                className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
            <p className="text-lg font-bold text-black dark:text-white">Total: ${total.toFixed(2)}</p>
            <Link to="/Checkout" onClick={onClose} className="primary-btn mt-4 block text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
