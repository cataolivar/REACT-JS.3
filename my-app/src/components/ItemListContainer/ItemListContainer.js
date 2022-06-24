import React from "react"
import "./ItemListContainer.css"
import fonts from "../../assets/fonts/fonts.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <span className= "greeting">{greeting}</span>
        </div>
    );
};

export default ItemListContainer