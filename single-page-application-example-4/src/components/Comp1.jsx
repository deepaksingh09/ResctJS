import { useParams } from "react-router-dom";
const Comp1=()=>
{
    const{param1,param2,param3}=useParams();
 return(
    <>
    <h1>Its Comp1</h1>
    <h1>
        {param1}....{param2}....{param3}
    </h1>
    </>
 )
}
export default Comp1;