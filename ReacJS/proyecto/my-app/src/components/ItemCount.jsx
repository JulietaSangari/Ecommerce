
import React,{useState} from 'react'

export default function IteamCount ({stock,initial,onAdd}){
    const[count, setInitialCount] = useState(initial ?? 0)
    function add(){
        if(stock !== 0){
            if (count >= stock){
                setInitialCount(stock)
                return
            }
           setInitialCount(count+1)
        }
    }
    function remove(){
        if (count <= 0) {
            setInitialCount(0)
            return
        }
        setInitialCount(count-1)
    }
    return <div className ="itemCount">
        <div className = "buttons">
            <button clickFunctions={remove} text="remover" variant="primary"/>
            <p>{'stock ${stock ?? 0}'}</p>
            <button clickFunctions={add} text="Agregar" variant="primary"/>
       </div>
       <p><strong>{count}</strong></p>
       <button text="Agregar al carrito"/>
    </div>;
}
