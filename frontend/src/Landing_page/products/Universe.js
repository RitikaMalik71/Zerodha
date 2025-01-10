import React from 'react';
import { Link} from "react-router-dom";
function Universe() {
    return (  
        <div className='container'>
            <div className='row text-center'>
<h1> The Zerodha Universe</h1>
<p>Extend your trading and investment experience even further with our partner platforms</p>
<div className='col-4 p-3 mt-4'>
    <img src="media/smallcaselogo.png"/>
    <p className='text-small text-muted'>Thematic investing platform</p>
    <img src="media/zerodhaFundhouse.png" style={{ height :'50px' ,width :'250px'}} className='mt-4'/>
    <p className='text-small text-muted'>Asset management</p>
    </div>

    <div  className='col-4 p-3 mt-4'>
    <img src="media/streakLogo.png" style={{ height :'60px' ,width :'250px'}}/>
    <p className='text-small text-muted'>Algo & strategy platform</p>
    <img src="media/goldenpilogo.png" style={{ height :'40px' ,width :'250px'}} className='mt-4'/>
    <p className='text-small text-muted'>Bonds trading platform</p>
</div>

<div className='col-4 p-3 mt-4'>

<img src="media/sensibullLogo.svg" style={{ height :'40px' ,width :'250px'}} />
<p className='text-small text-muted'>Options trading platform</p>
<img src="media/dittoLogo.png" style={{ height :'40px' ,width :'250px'}} className='mt-4'/>
    <p className='text-small text-muted'>Insurance</p>
</div>       
<Link to={"/signup"}><button className="p-2 btn btn-primary fs-5" style={{width :"20%", margin :"0 auto"}}>Signup Now</button>     </Link>
</div>
        </div>
    );
}

export default Universe;