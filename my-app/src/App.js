import './index.css';
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import React from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Items/Items"
const App = () => {
  return (

    <div>

<Header/>
<NavBar/>
<ItemListContainer greeting= "Bienvenidos a Kalaka"/>
<Item/>

    </div>
  )
}

export default App