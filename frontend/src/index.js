import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Browser, Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup';
import PricingPage from './Landing_page/pricing/PricingPage';
import SupportPage from './Landing_page/support/SupportPage';
import AboutPage from './Landing_page/about/AboutPage';
import ProductPage from './Landing_page/products/ProductPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
import Login from './Landing_page/login/Login';
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route path="/" element={<HomePage></HomePage>}></Route>
  <Route path="/signup" element={<Signup></Signup>}></Route>
  <Route path="/about" element={<AboutPage></AboutPage>}></Route>
  <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
  <Route path="/support" element={<SupportPage></SupportPage>}></Route>
  <Route path="/product" element={<ProductPage></ProductPage>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="*" element={<NotFound></NotFound>}></Route>
  </Routes>
  <Footer></Footer>
  </BrowserRouter>

  
);
