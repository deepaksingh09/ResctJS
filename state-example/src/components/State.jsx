import { useState } from "react";
const State=()=>
{
  const[msg,setMsg]=  useState("i am working on State(variable)")
  return(
    <>
    <h1>{msg}</h1>
    </>
  )
}
export default State;