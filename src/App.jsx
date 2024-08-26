import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductSingle from './Pages/Products/ProductSingle';
import Bola from './Pages/Products/Bola';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products';
import Checkout from './Pages/Products/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <BrowserRouter>
      <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white text-black'>
        <Navbar cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Products' element={<Products />} />
          <Route 
            path='/Products/:id' 
            element={<ProductSingle onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path='/Checkout' 
            element={<Checkout cartItems={cartItems} />} 
          />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Bola' element={<Bola />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
