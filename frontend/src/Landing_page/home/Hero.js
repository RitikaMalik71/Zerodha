import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
<div className='row text-center'>
    <img src='media/homeHero.png' alt='hero image' className='mb-5'></img>
    <h1 className='mt-5'>Invest in everything</h1>
    <p>
    Online platform to invest in stocks, derivatives, mutual funds, and more.
    </p>
    <Link to={"/signup"}><button className="p-2 btn btn-primary fs-5" style={{width :"30%", margin :"0 auto"}}>Signup Now</button></Link>
</div>
        </div>
     );
}

export default Hero ;