import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';
function ProductPage() {
    return ( <>
 
    <Hero></Hero>
    <LeftSection imageURL="media/kite.png" productName="Kite" productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore=""  googlePlay="" appStore=""
    ></LeftSection>
    <RightSection imageURL="media/console.png" productName="Console" productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."learnMore=""  ></RightSection>
    <LeftSection imageURL="media/coin.png" productName="Coin" productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore=""  googlePlay="" appStore=""
    ></LeftSection>
    <RightSection  imageURL="media/kiteconnect.png" productName="Kite Connect API" productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."learnMore="" ></RightSection>
    <LeftSection imageURL="media/varsity.png" productName="Varsity mobile" productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore=""  googlePlay="" appStore=""
    ></LeftSection>
    <h5 className='text-center mt-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
    <Universe></Universe>
   
    </> );
}

export default ProductPage;