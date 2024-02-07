import { useState } from "react";
const Comp2=()=>{
    const[msg,setMsg]=useState("ReactJS")
    const Fun_one=()=>
    //nodifying the setMsg
        setMsg("ReactJS 18.X")
    {
console.log("Welcome to click event")
}
    return(
    
        <>
            <h1>{msg}</h1>
            <button onClick={Fun_one}>   Modify</button>

        </>
    )
    
    }
    export default Comp2;