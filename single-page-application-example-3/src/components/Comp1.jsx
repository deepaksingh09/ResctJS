//to  link  we need to import the link
import {Link} from "react-router-dom";
const Comp1=()=>
{
    return(
        <>
        <h1>Welcome to Comp1</h1>
        /*
         creating hyperlink
         */
         <Link to="/  ">Child1</Link>
        </>
    )
}
export default Comp1;