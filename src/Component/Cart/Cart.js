import React from 'react';
import Bandlist from '../BandList/Bandlist';
import "./Cart.css"

const Cart = (props) => {
      
      
      const {cart} = props;
       
      let total = 0;
       
      const bandName= [];

        
      let count = 0;
      for(const band of cart)
      {
          
               
                if(bandName.indexOf(band.name)!==-1){
                    console.log("value Exist")
                }
                else{
                    bandName.push(band.name); 
                    total = total + parseInt(band.Payment);
                    count++;
                }
      } 

      
      
      
    return (
        <div className="cart">
           <h4> <span className="title-cart">Band Added:</span> {count} </h4>
           <h6> <span className="title-cart">Total Cost:</span> ${total}</h6> 
           <h6> <span className="title-cart">List Of Added Bands:</span> </h6>
            {
                bandName.map(band => 
                    
                     <Bandlist key={band} band={band}></Bandlist>
                    
                    )
            }
            
        </div>
    );
};

export default Cart;