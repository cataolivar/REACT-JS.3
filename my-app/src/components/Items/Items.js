import React, { useState } from "react"
import "./Items.css"
import img1 from "../../assets/img/mediasCloud.PNG"

export const Items = () => {

    const [amount,setAmount] = useState(0)
    const [limit,setLimit] = useState (10)
    const count = (value) => {
        setAmount(amount+value)
    }

    return (
        <section>
            <h3>Nombre del producto</h3>
            <img className="img1" src={img1} alt="medias"/>
            <h4>Precio: $<span>200</span></h4>
            <div className="divButton">
                <button onCLick={()=>count(-1)}> - </button>
                <button>{amount}</button>
                <button onClick={()=>count(+1)}> + </button>
            </div>
        </section>
    );
};

export default Items