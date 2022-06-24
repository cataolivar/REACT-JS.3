import './index.css';
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import React from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Items/Items"
import img1 from "../src/assets/img/mediasCloud.PNG"
import img2 from "../src/assets/img/parcheJessica.PNG"
import img3 from "../src/assets/img/tinturaCandy.PNG"
import UseItems from './components/hooks/UseItems';

const App = () => {
  return (

    <div>

<Header/>
<NavBar/>
<ItemListContainer greeting= "Bienvenidos a Kalaka"/>
<Item stock={10} name="Medias Cloud" precio={600} img={img1} />
<Item stock={10} name="Parche Jessica" precio={400} img={img2}/>
<Item stock={10} name="Tintura Candy" precio={1200} img={img3}/>

    </div>
  )
}

export default App