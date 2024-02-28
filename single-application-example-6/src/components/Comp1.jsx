//to pass the parameter we need to import the hook
import { useParams } from "react-router-dom";
const Comp1=()=>
{
    const{param1,param2}=useParams();

    return(
        <>
        <h1>welcome to comp1</h1>
        <h1>{param1}.....{param2}</h1>
        </>
    )
}
export default Comp1;