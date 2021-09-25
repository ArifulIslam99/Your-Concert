import React from 'react';
import "./BandsInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BandsInfo = (props) => {
    // console.log(props.band)
    const {name, Genre, Country, img, Availaible, Payment} = props.band;
    return (
        <div className="card-image">
             <div >
               <img src={img} alt="" />
             </div> 
             <div className="card-details">
                <p><span className="title">Name:</span>{name} </p>
                <p><span className="title">Genre:</span>{Genre}</p>
                <p><span className="title"> Country:</span>{Country} </p>
                <p><span className="title">Availibility:</span>{Availaible}</p>
                <p><span className="title">Payment:$</span>{Payment} </p>

                <button  onClick={()=>props.eventhandler(props.band)} className="button"><FontAwesomeIcon icon={faShoppingCart} /> add in your team </button>
             </div>
        </div>
    );
};

export default BandsInfo;