import React, { useEffect, useState } from 'react';
import BandsInfo from '../BandsInfo/BandsInfo';
import Cart from '../Cart/Cart';
import "./Bands.css"

const Bands = () => {

    const [bands, setBands] = useState([]);
    const [cart, setCart] =useState([]);

    useEffect(() => {
        fetch('/package.json')
        .then(res => res.json())
        .then(data => setBands(data))
    },[])

    const eventhandler = (band) => {
        const newCart = [...cart, band];
        setCart(newCart)
    }
    return (
        <div className="main">
            <div className="band-info">
              {
                  bands.map(band => <BandsInfo
                     key ={band.name}
                     eventhandler = {eventhandler}
                     band={band}
                     ></BandsInfo>)
              }
            </div>
            <div className="band-cost">
                   <Cart cart={cart} ></Cart>   
            </div>
        </div>
    );
};

export default Bands;