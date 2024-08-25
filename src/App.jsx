import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import HomePage from './Pages/HomePage';
import ProductSingle from './Pages/Products/ProductSingle';
import Bola from './Pages/Products/Bola';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white text-black'>
        <Navbar/>
        <Routes >
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Products/:id' element={<ProductSingle/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Bola' element={<Bola/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
