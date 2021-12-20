import React from 'react'

const ItemListContainer = () => {
    // return (
    //     <div className="container-fluid border border-dark text-center"style={{minHeight:"100px"}}>
    //         <h1><b>Valkiria</b></h1>
    //         <h2>Indumentaria Femenina</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates natus fuga beatae accusantium consequuntur deserunt iusto, earum aut distinctio corrupti dolor veritatis rerum, ex obcaecati temporibus dolore perferendis modi velit alias vel ipsam voluptatum sequi voluptas. Fuga laborum commodi soluta dicta numquam? Dolores totam temporibus vel accusamus, a harum eum.</p>
    //         <img className="w-50"src="https://static.vecteezy.com/system/resources/previews/002/497/916/non_2x/online-shopping-store-with-mobile-application-digital-marketing-and-sale-banner-background-free-vector.jpg"></img>
            
    //     </div>
    // )

    const array = [
        {
            id:1,
            name:"remera",
            stock:5,
            price: 1750,
            img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_corta_de_mujer.jpg",
            category:"indumentaria",

        },
        {
            id:2,
            name:"vestido",
            stock:5,
            price: 1750,
            img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_corta_de_mujer.jpg",
            category:"indumentaria",

        },
        {
            id:3,
            name:"short",
            stock:2,
            price: 1750,
            img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_corta_de_mujer.jpg",
            category:"indumentaria",

        },
        {
            id:4,
            name:"pantalon",
            stock:1,
            price: 1750,
            img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_corta_de_mujer.jpg",
            category:"indumentaria",

        }
    ]


 const[data,setData] = useState(null);

 let promise = new promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(array);
    }, 3000);
 });

 const resolverArray = async () =>{
    try{
        const data =await promise;
        setData(data);
    }catch(error){
        throw error;
    }finally{
        console.log("la peticion se termino");
    }
  };

 useEffect(() => {
    resolverArray();
 },[]);
    return (
        <div className="bg-venom full-height"></div>
    );
}

export default ItemListContainer
