import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import HomePage from './Pages/HomePage';
import Products from './Pages/Products';
import ProductList from './Pages/Products/ProductList';
import ProductSingle from './Pages/Products/ProductSingle';
import Bola from './Pages/Products/Bola';
import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <BrowserRouter>
      <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white text-black'>
        <Navbar/>
        <Routes >
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/ProductList' element={<ProductList/>}/>
          <Route path='/ProductSingle' element={<ProductSingle/>}/>
          <Route path='/Bola' element={<Bola/>}/>
        </Routes>
      </div>
  </BrowserRouter>
  )
}
export default App



// import './App.css'
// import {Routes, Route, BrowserRouter} from "react-router-dom";


// import NavBarComponents from './Components/NavBarComponents';
// import FooterComponents from './Components/FooterComponents';

// import FaqPage from './Pages/FaqPage';
// import HomePage from './Pages/HomePage';




// function App() {
  
//   return (
//   <>
//     <BrowserRouter>
//     <NavBarComponents/>
    
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Faq" element={<FaqPage />}/>
//       </Routes>
//     <FooterComponents/>
//     <BrowserRouter/>
//   </>
//   );
// }
// export default App
