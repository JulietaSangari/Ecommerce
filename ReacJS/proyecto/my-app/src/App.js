import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import IteamCount from "./components/ItemCount";
import { useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Detalle from "./components/Detalle";
import Category from "./components/Category";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Error from "./components/Error";
import CarritoProvider from "./context/CarritoProvider";

export default function App(){
  const [carrito,setCarrito]= useState([])
  return(
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/***" element={<Error/>}/>
          <Route path="/dettalle/:id" element={<Detalle/>}/>
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="/checkout/:idTicket" element={<Checkout/>}/>
          <Route path="/Item" element={<IteamCount button={0}/>}/>
        </Routes>
        </CarritoProvider>
    </BrowserRouter>
    
  )
  
};

