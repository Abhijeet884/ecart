import React from "react";
import paypal from "./image/paypal.png"
import mastercard from "./image/mastercard.png"

function Payment() {
    return(
        <div className="imgContainer">
               <span className="span">Payment Method</span> 
                 <div className="paymentContainer">
                    <img className="img" src={paypal} alt={""}/> 
                    <img className="img" src={mastercard} alt={""}/> 
                    <img className="img" src={paypal} alt={""}/> 
                    <img className="img" src={mastercard} alt={""}/> 
                    <img className="img" src={paypal} alt={""}/> 
                    <img className="img" src={mastercard} alt={""}/> 
                 </div>
                
                <div className="deliveryCard">
                    <span className="span">Delivery method</span>
                    <div className="deliveryContaier">
                      <img className="imgDel" src={paypal} alt={""}/> 
                      <img className="imgDel" src={mastercard} alt={""}/> 
                      <img className="imgDel" src={paypal} alt={""}/> 
                      <img className="imgDel" src={mastercard} alt={""}/> 
                    
                    </div>
                </div>
                 
                  
        </div>
    ); 
}
export default Payment;