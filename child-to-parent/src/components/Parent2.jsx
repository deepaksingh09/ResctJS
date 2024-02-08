// in this we have to connect with child and 
//child will transmitt the data 
import Child2 from "./Child2";
import { useState } from "react";
const Parent2=()=>
{
    const[msg1,setMsg1]=useState("")
    const[msg2,setMsg2]=useState(0)
    const[msg3,setMsg3]=useState([])
// creating a function to communicate with Child
const func_three=(param1,param2,param3)=>
{
    setMsg1(param1);
    setMsg2(param2);
    setMsg3(param3);

} 
 return(
    <>
    <Child2 func_three={func_three}></Child2>
    <h1>{msg1}</h1>
    <h1>{msg2}</h1>
    <h1><u>Array</u></h1>
    {
        msg3.map((element,index)=>
        {
            return(
                <h2 key={index}>{element}</h2>
            )
        })
    }
    </>
 )
}
export default Parent2;