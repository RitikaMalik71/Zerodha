import React from 'react';
function Awards () {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 p-5'>
                    <img src="media/largestBroker.svg" alt="largest broker img"></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in :</p>
                   <div className='row'>
                    <div className='col-6'> 
                    <ul>
                    <li><p>
                        Futures and Options
                        </p></li>
                   </ul>
                   <ul>
                    <li><p>
                        Commodity derivatives
                        </p></li>
                   </ul>
                   <ul>
                    <li><p>
                      Currency derivatives
                        </p></li>
                   </ul>
                    </div>
                    <div className='col-6'> 
                    <ul>
                    <li><p>
                        Stock & IPO's
                        </p></li>
                   </ul>
                   <ul>
                    <li><p>
                        Direct mutual bonds
                        </p></li>
                   </ul>
                   <ul>
                    <li><p>
                   Bonds and Govt. Securities
                        </p></li>
                   </ul>
                    </div>
                   </div>
                  <img src="media/pressLogos.png" alt="press img" style={{width : "90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;