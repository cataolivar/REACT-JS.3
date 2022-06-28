import React from "react"
import "./ItemListContainer.css"
import fonts from "../../assets/fonts/fonts.css"
import UseItems from "../UseItems/UseItems";

const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        console.log("Se agrego al carrito ${cantidad}")
    }

    return (
        <div>
            <span className= "greeting">{greeting}</span>
            <UseItems stock={10} initial={1} onAdd={onAdd}/>
            <UseItems stock={10} initial={1} onAdd={onAdd}/>
            <UseItems stock={10} initial={1} onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer