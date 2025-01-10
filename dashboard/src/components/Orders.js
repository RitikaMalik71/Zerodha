import React,  {useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Orders = () => {

  const [allOrders, setAllOrders]=useState([]);
  useEffect(()=>{
 axios.get("http://localhost:8080/allOrders").then((res)=>{
 console.log(res.data);
   setAllOrders(res.data);
 });
  },[]);
  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>
    <div className="order-table">
<table>
    <tr>
       <th>Name</th>
       <th>Qty</th>
       <th>Price</th>
       <th>Mode</th>
    </tr>
    {allOrders.map((stock, index)=>{
const name=stock.name;
const qty =stock.qty;
const price=stock.price;
const mode= stock.mode;
return (
    <tr key={index}>
    <td>{stock.name}</td>
    <td>{stock.qty}</td>

    <td>{stock.price.toFixed(2)}</td>
    <td>{stock.mode}</td>
   
</tr>
);
    })}
</table>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    
    </>
    
  );
};

export default Orders;