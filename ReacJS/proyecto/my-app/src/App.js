import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import IteamCount from "./components/ItemCount";
import {BrowserRouter, Routes, Route} from "react"

export default function app(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Category" element={<ItemListContainer/>}/>
        <Route exact path="/Item" element={<IteamCount button={0}/>}/>
      </Routes>
    </BrowserRouter>
  )
};

