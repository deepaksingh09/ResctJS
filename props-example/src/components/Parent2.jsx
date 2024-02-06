import Child2 from "./Child2";
import { useState } from "react";
const Parent2=()=>
{
    const[msg,setMsg]=useState("JavaScript");
    const[obj,setObj]=useState({"key1":"Hello","key2":"Welcome"})
    const[num,setNum]=useState(100)
    const[flag,setFlag]=useState(true)
    //array
    const[arr,setArr]=useState([10,20,30,40])
    //array of object
    const[obj1,setObj1]=useState([{"Sno":"101","Sname":"Sone","Ssal":"1000"},
                                  {"Sno":"102","Sname":"Stwo","Ssal":"2000"},
                                  {"Sno":"103","Sname":"Sthree","Ssal":"3000"},
                                  {"Sno":"104","Sname":"Sfour","Ssal":"4000"},
                                  {"Sno":"105","Sname":"Sfive","Ssal":"5000"}])
                                  
    

    return(
        <>
        <Child2 msg={msg} obj={obj} num ={num} flag={flag} arr={arr} obj1={obj1}></Child2>
        </>
    )
}
export default Parent2;