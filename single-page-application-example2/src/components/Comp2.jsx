import {Link, Outlet}  from "react-router-dom";

const Comp2=()=>
{
  return(
    <>
    <h1>Welcome to Comp2</h1>
    /* linking Child with Comp2 */
    <Link to="Comp2/Child3" style={{marginRight:200}}>Child#3</Link>
    <Link to="Comp2/Child4" style={{marginRight:200}}>Child4</Link>
    <br></br>
    <Outlet></Outlet>
    </>
  )
}
export default Comp2;