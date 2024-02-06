import { useState } from "react";
import Comp1 from "./comp1"; 
import Comp2 from "./Comp2";
const State1=()=>
{
  const[num1,setNum1]=  useState(100);
  const[num2,setNum2] = useState(200);
  //conditional statment
  const[flag,setFlag]=useState(true);
return(<>
    <h1>Addition------{num1+num2}</h1>
    <h1>Subtraction-----{num2-num1}</h1>
   {
    flag?<h1><Comp1></Comp1></h1>:<h1><Comp2></Comp2></h1>
   }
   {//for not true condition
    !flag?<h1><Comp1></Comp1></h1>:<h1><Comp2></Comp2></h1>
   }
    </>)
}
export default State1;