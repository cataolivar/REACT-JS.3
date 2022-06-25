import React from "react"
import "./Items.css"
import {UseItems} from "../hooks/UseItems"


export const Items = ({stock,name,precio,img }) => {

    const {count, amount} = UseItems(stock)
    return ( 
        <section className="itemImg">
            <h3>{name}</h3>
            <h4><span>${precio}</span></h4>
            <img className="img1" src={img}alt="img" />
            <div className="divButton">
                <button onClick={() => count(-1)}> - </button>
                <span>{amount}</span>
                <button onClick={() => count(+1)}> + </button>
                <h5 className="h5Items" >{stock} unidades disponibles</h5>
            </div>
        </section>
    );
};

export default Items