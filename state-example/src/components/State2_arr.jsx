import { useState } from "react";
const State2=()=>

{
    const [arr,setArr]=useState([10,20,30,40,50]);
// working with the object
    const[obj,setObj]=useState({"key1":"Name","key2":"Contact"})
  
    return(

//map is used for the iteration
<>
<h1>{obj.key1}{obj.key2}</h1>
  {
    arr.map((element,index)=>{
        return(<h1>key={index}{element}</h1>)
    })
  }       
</>)
}
export default State2;