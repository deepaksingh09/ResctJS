// to do in this
// create one button----Done
// modify the data
// to modify need to create a function
// inside the function we will pass usemodify to modify the msg
import { useState } from "react";
const Event3=()=>
{
    const [msg,setMsg]=useState("JavaScript")
    //creating function
    const Func_modify=()=>
    {
        setMsg("JavaScript X")
    }
    return(
        <>
        <h1>{msg}</h1>
        <button onClick={Func_modify}>Modify</button>
        </>
    )

}
export default Event3;