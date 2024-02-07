import { useState } from "react";
const Event3=()=>
{
    const [msg,setMsg]=useState("");
    //creating function
    const func_one =(param1,param2)=>    
    {
       // modifing message
       param1=="admin" && param2=="admin@123" ? setMsg("Login Success") :setMsg("Login FaiL")
    }
return(
    <>
        <button onClick={()=>func_one("admin","admin@123") }>Click me</button>

    <br></br>
    <h1>{msg}</h1>
    </>
)
}
export default Event3;