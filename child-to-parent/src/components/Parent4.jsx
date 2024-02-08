// in this we have to connect with child and 
//child will transmitt the data 
import Child4 from "./Child4";
import { useState } from "react";
const Parent4=()=>
{
    const[msg1,setMsg1]=useState("")
    const[msg2,setMsg2]=useState(0)
    const[msg3,setMsg3]=useState([])
    const[msg4,setMsg4]=useState()
    const[msg5,setMsg5]=useState([{}])
// creating a function to communicate with Child
const func_three=(param1,param2,param3,param4,param5)=>
{
    setMsg1(param1);
    setMsg2(param2);
    setMsg3(param3);
    setMsg4(param4);
    setMsg5(param5);

} 
 return(
    <>
    <Child4 func_three={func_three}></Child4>
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
    {
        //creating table and iteration of table 
        <table align="center"
                border={2}
               cellPadding={10}
               cellSpacing={10}>
                <thead>
                    <tr>
                        <td>Sno</td>
                        <td>Sname</td>
                       
                        <td>Ssal</td>
                    </tr>

                </thead>
                <tbody>
                    {//iteration
                    msg5.map((element,index)=>{
                        return(<tr key={index}>
                            <td>{element.Sno}</td>
                            <td>{element.Sname}</td>
                           
                            <td>{element.Ssal}</td>

                        </tr>)

                    })
                    }
                </tbody>

        </table>
    }
    
    </>
 )
}
export default Parent4;