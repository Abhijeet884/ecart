import React from "react";
import Button from "./button";

function Form(){
    return(
        <div className=" formContainer">
            <div className="formHead">
               <h2>Shipping and Payment</h2>
               <Button />
            </div>
            
            <p>Shipping Information</p>
             
             <form className="formField">
                <input className="typeForm" type="text" placeholder="Email" /> 
                <input className="typeForm" type="text" placeholder="Address" />
                <input className="typeForm" type="text" placeholder="First Name" /> 
                <input className="typeForm" type="text" placeholder="City" /> 
                <input className="typeForm" type="text" placeholder="Last Name" /> 
                <input className="typeForm" type="text" placeholder="Postal Code/Zip " /> 
                <input className="typeForm" type="text" placeholder="Phone" /> 
                 <select className="selectForm" >  
                  <option>India</option>
                  <option>Japan</option>
                  <option>Germany</option>
                  <option>China</option>
                  </select>              
                
             </form>
        </div>
    );
}
export default Form;