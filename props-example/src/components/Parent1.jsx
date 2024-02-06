import Child1 from "./Child1";
//importing useState
import { useState } from "react";
const Parent1=()=>
{   //string
    const[msg,setMsg]=useState("ReactJS")
    //array
    const[arr,setArr]=useState([10,20,30,40,50])
    return(
    <>
    <Child1 msg={msg} arr></Child1>

    
    </>
    )

}
export default Parent1;