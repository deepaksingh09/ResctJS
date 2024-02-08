// in this we have to connect with child and 
//child will transmitt the data 
import Child3 from "./Child3";
import { useState } from "react";
const Parent3=()=>
{
    const[msg1,setMsg1]=useState("")
    const[msg2,setMsg2]=useState(0)
    const[msg3,setMsg3]=useState([])
    const[msg4,setMsg4]=useState()
// creating a function to communicate with Child
const func_three=(param1,param2,param3,param4)=>
{
    setMsg1(param1);
    setMsg2(param2);
    setMsg3(param3);
    setMsg4(param4);

} 
 return(
    <>
    <Child3 func_three={func_three}></Child3>
    <h1>{msg1}</h1>
    <h1>{msg2}</h1>
   
    {
        msg3.map((element,index)=>
        {
            return(
                <h2 key={index}>{element}</h2>
            )
        })
    }
    <h1>{JSON.stringify(msg4)}</h1>
    
    </>
 )
}
export default Parent3;