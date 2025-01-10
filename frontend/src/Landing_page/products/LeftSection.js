import React from 'react';
function LeftSection({imageURL, productName, productdescription,tryDemo, learnMore, googlePlay,appStore}) {
    return ( 
        <div className='container '>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img  className=" p-5" src={imageURL}/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productdescription}</p>
                    <div>
                    <a  className="mx-2" href={tryDemo}  style={{textDecoration :"none"}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore}  style={{textDecoration :"none"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                   <div className='mt-3'>
                   <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
                   <a><img src="media/appstoreBadge.svg"/></a>
                   </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;