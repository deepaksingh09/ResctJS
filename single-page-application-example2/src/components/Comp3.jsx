import { Link, Outlet } from "react-router-dom";
const Comp3=()=>
{

    return(
        <>
        <h1>Welcome to Comp3</h1>
        <Link to="Comp3/Child5" style={{marginRight:200}}>Child5</Link>
        <Link to="Comp3/Child6" style={{marginRight:200}}>Child6</Link>
        <br></br>
        <Outlet></Outlet>
        </>
    )
}
export default Comp3;