import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import IteamCount from "./components/ItemCount";

function App() {
 
  return (
  
  
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <IteamCount button={0}/>
      
    </div>
  ); 
}

 export default App;
 
