import React from "react"
import "./Items.css"


export const Items = ({name,precio,img }) => {

    return ( 
        <section className="itemImg">
            <h3>{name}</h3>
            <h4><span>${precio}</span></h4>
            <img className="img1" src={img}alt="img" />
        </section>
    );
};

export default Items