import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 text-center border-top'> 
                <div className='col-8'>
                  <a href="" style={{textDecoration :"none"}}><h4>Brokerage calculator</h4></a>  
                <ul className='text-muted' style={{lineHeight :"2.5" , fontSize :'12px',textAlign :'left'}}>
 
   
  <li> If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
   <li>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
    <li> Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
                </ul>
                </div>
                <div className='col-4'>
                   <a href="" style={{textDecoration :"none"}}><h4> List of charges</h4></a> 
                </div>
            </div>
        </div>
    );
}

export default Brokerage;