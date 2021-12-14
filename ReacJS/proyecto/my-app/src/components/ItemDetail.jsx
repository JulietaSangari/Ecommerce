import React from "react";
import IteamCount from "..components/ItemCount";

const ItemDetail = ({ item }) =>{
 
    return ( <div className="w-100 full-height"> 
     <div className="container-fluid py-4">
         <carrusel img={item.img}/>
         <div className="container-fluid">
             <div className="row mt-4">
                 <div className="col col-12 col-lg-6">
                   <h4 className="display-4 text-center">{item.nombre}</h4>
                   <h6 className="fs-5 fw-light lh-base p-lg-3">{item.descripcion}</h6>
                 <div className="d-flex justify-content-between border px-4 align-items-center">
                     <p className="fs-4 m-0 text-uppercase">plataforma</p>
                 </div>
                 </div>
             </div>
         </div>
     </div>


    </div>
      
        )
   
}