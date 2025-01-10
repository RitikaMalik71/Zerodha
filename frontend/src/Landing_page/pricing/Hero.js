import React from 'react';
function Hero() {
    return ( 
        <div className='container '>
            <div className='row p-5  mt-5  text-center '>
<h1>Pricing</h1>
<h3 className='   mb-5 text-muted fs-5 mt-2' style = {{ marginBottom : " 15px" }}> Free equity investments and flat 20 rupees today ang F&O trades </h3>
<div className='row p-5 mt-5 border-top'> 
<div className='col-4 p-4'>
    <img src="media/pricingEquity.svg"/>
    <h1 className='fs-2'>Free equity delivery</h1>
    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free -0 brokerage.</p>
</div>
<div className='col-4 p-4'>
<img src="media/intradayTrades.svg"/>
    <h1 className='fs-2'>Intraday and F&O trades</h1>
    <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
</div>
<div className='col-4 p-4'>
<img src="media/pricingEquity.svg"/>
    <h1 className='fs-2'>Free direct MF</h1>
    <p className='text-muted'>All direct mutual fund investments are absolutely free - Rs. 0 commissions & DP charges.  </p>
</div>
</div>

            </div>
        </div>
    );
}

export default Hero;