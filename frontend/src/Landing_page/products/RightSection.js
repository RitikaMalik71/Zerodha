import React from 'react';
function RightSection({imageURL, productName, productdescription, learnMore}) {
    return ( 
        <div className='container '>
        <div className='row text-center '>
            
            <div className='col-6 p-5 '>
                <h1>{productName}</h1>
                <p>{productdescription}</p>
            
                <a href={learnMore}  style={{textDecoration :"none"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              
              
                
            </div>
            <div className='  col-6 p-3 '>
                <img  className=" text-center" src={imageURL} />
            </div>
        </div>
    </div>
   );
}

export default RightSection;