import "./Cart.css";
import React from "react";
import shirt from "./image/shirt.jpg";

function Cart() {
    return(
        <div className="cartContainer">
            <p className="cartHeading"> Your Cart</p>
             <div className="cartDetails">
                 <div className="cartBig">
                    <img className="cartImg" src={shirt} alt={""} /> 
                  </div>
                 <div className="cartSide">
              
                    <h4 className="cartTitle">T-Shirt</h4>
                    <h5 className="cartTitle">Summer Vibes</h5>
                    <h6 className="cartId">#261311</h6>
             </div>
             <div className="cartPrice"> $89.99</div>        
             </div>

             <div className="cartDetails">
                 <div className="cartBig">
                    <img className="cartImg" src={shirt} alt={""} /> 
                  </div>
                 <div className="cartSide">
              
                    <h4 className="cartTitle">T-Shirt</h4>
                    <h5 className="cartTitle">Summer Vibes</h5>
                    <h6 className="cartId">#261311</h6>
             </div>
             <div className="cartPrice"> $89.99</div> 

                       
             </div>

                <div>
                    
                </div>
        </div>
    ); 
}
export default Cart;    