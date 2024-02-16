// to link with the child we need to import Link
import {Link, Outlet}  from "react-router-dom";
const Comp1=()=>
{
  return(
    <>
    <h1>Welcome to Comp1</h1>
    /* now we will link the child 
     which is second level routing */

    <Link to="Comp1/Child1" state={{marginRight:200}}>Child1</Link>
    <Link to="Comp1/Child2" state={{marginRight:200}}>Child2</Link>
    <br></br>
<Outlet></Outlet>
    </>
  )
}
export default Comp1;