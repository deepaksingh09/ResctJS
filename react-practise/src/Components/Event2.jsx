import { useState } from "react";
const Event2=()=>
{
    const [msg,setMsg]=useState("React");
    //creating function
    const func_one =()=>    
    {
       // modifing message
       setMsg("ReactJS 18.X");
    }
     
return(
    <>
    <h1>{msg}</h1>
    <button onClick={func_one }>Modify</button>
    </>
)
}
export default Event2;