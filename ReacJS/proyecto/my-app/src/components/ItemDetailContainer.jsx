import React,{useEffect} from "react";
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () =>{
    useEffect(() => {
        fetchGetIndividualProduct({id})
    },[])
        return (
            <div>
                {producto && <ItemDetail item= {producto}/>}
            </div>
        ) 
        
}

export default ItemDetailContainer