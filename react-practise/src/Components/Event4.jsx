// importing hooks
import { useRef,useState } from "react";
const Event4=()=>
{
    //creating input by useref hook
    const ref1= useRef(null);
    const ref2= useRef(null);
    const[msg,setMsg]=useState("")
    const login=()=>
    {
        ref1.current.value == "admin" && ref2.current.value == "admin@123" 
        ? setMsg("login Success "): setMsg(" Login Fail")

    }
    return(
        <>
        <h2>Login Portal</h2>
        <br></br>
        Username:- <input type="text" ref={ref1} placeholder="enter user name"></input>
        <br></br><br></br>
        Password:- <input type="password" ref={ref2} placeholder="password"></input>
        <br></br><br></br>
        <button onClick={login}>Login</button>
        <h1>{msg}</h1>
        </>
    )
}
export default Event4;