import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/global.scss';


import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import About from './components/views/About/About';
import Products from './components/views/Products/Products';
import BodyProducts from './components/views/BodyProducts/BodyProducts';
import FaceProducts from './components/views/FaceProducts/FaceProducts';
import HairProducts from './components/views/HairProducts/HairProducts';
import Workshops from './components/views/Workshops/Workshops'
import Footer from './components/layout/Footer/Footer';
import NotFound from './components/views/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
        <MainLayout/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/soaps" element={<Products />} />
          <Route path="/soaps/body" element={<BodyProducts />} />
          <Route path="/soaps/face" element={<FaceProducts />} />
          <Route path="/soaps/hair" element={<HairProducts />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer/>
    </BrowserRouter> 
   
  );
}

export default App;