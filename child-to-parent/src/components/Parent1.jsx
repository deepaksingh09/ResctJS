// in this we have to connect with child and 
//child will transmitt the data 
import Child1 from "./Child1";
import { useState } from "react";
const Parent1=()=>
{
    const[msg1,setMsg1]=useState("")
    const[msg2,setMsg2]=useState("")
    const[msg3,setMsg3]=useState("")
// creating a function to communicate with Child
const func_two=(param1,param2,param3)=>
{
    setMsg1(param1);
    setMsg2(param2);
    setMsg3(param3);

} 
 return(
    <>
    <Child1 func_two={func_two}></Child1>
    <h1>{msg1}</h1>
    <h1>{msg2}</h1>
    <h1>{msg3}</h1>
    </>
 )
}
export default Parent1;