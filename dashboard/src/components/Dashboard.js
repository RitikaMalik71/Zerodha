import React from 'react';
import {Route, Routes} from "react-router-dom";
import Orders from "./Orders";
import Summary from "./Summary";
import Holdings from "./Holdings";
import Positions from "./Positions";
import WatchList from "./WatchList";

import Funds from "./Funds";
import { Login } from '@mui/icons-material';


import "react-toastify/dist/ReactToastify.css";
import { GeneralContextProvider } from './GeneralContext';


const Dashboard=()=>{
    return (
<div className='dashboard-container'>
    <GeneralContextProvider>
   <WatchList/>
    </GeneralContextProvider>
    
    <div className='content'>
        <Routes>
            <Route path="/" element={<Summary/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/holdings" element={<Holdings/>}></Route>
            <Route path="/positions" element={<Positions/>}></Route>
            <Route path="/funds" element={<Funds/>}></Route>
          
            
        </Routes>
    </div>
</div>
    );
}
export default Dashboard;