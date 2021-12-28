import { createContext,useState } from "react"

const CarritoContext = createContext();
const CarritoProvider = ({children}) => {
    const [carrito,setCarrito]= useState([])
    const [stateUno,setStateUno] = useState(1)
    const [stateDos,setStateDos] = useState(2)
    const [stateTres,setStateTres] = useState(3)

    let usuario =true;
    function addCrrito(item){
       setCarrito(...carrito,item)
    }

    function CheckearCantidadDeItems(){
         console.log("soy Checkear cantida")
    }

    return (
        <CarritoContext.Provider value={{carrito,setCarrito,CheckearCantidadDeItems}}>
            {children}
        </CarritoContext.Provider>
            
       
    );
};

export default CarritoProvider
