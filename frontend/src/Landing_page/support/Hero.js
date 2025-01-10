import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className=' p-3  ' id="supportWrapper" >
                <h5 className=' fs-4' >Support Portal</h5>
                <a href="" style ={{color :"white"}}><h5 className='fs-4'>Track tickets</h5></a>
            </div>
            <div className='row  p-3 mx-3  '  >
                <div className='col-5 p-3' >
                    <h1 className='fs-3 '>Search for an answer or browse help topics to create a ticket</h1>
                    <br></br>
               
                    <input placeholder="Eg: how do i activate F&O, why is my order getting rejected..." id="inp"></input>
                    <br></br>
                    <br></br>
                    <a href="" style={{color :'white'}}>Track account opening</a>&nbsp;

<a href="" style={{color :'white'}}>Track segment activation</a>&nbsp;
<br></br>
<a href="" style={{color :'white'}}>Intraday margins</a>&nbsp;

<a href="" style={{color :'white'}}>Kite user manual</a>
                </div>
             
                <div className='col-5 p-3 mx-auto' >
                    <h1 className='fs-3 mx-auto'>Featured</h1>
                    <ol>
                        <li><a href="" style={{color :'white', lineHeight :"2.5"}}> BSE StAR mutual fund platform downtime</a></li>
                        <li><a href="" style={{color :'white' ,lineHeight :"2.5"}}> Rights Entitlements listing in October 2024</a></li>
                    </ol>
                    


                </div>
            </div>
           
        </section>
    );
}

export default Hero;