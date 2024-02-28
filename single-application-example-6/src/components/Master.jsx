// we are importing the componenets
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

//importing the hook for the link and routing
import { Link ,Route,Routes } from "react-router-dom";
const Master=()=>
{
    return(
        <>
        <Link to="/Comp1/101/A_One" style={{marginRight:200}}>Comp1</Link>
        <Link to="/Comp2/102/B_Two" style={{marginRight:200}}>Comp2</Link>
        <Link to="/Comp3/103/C_Three" style={{marginRight:200}}>Comp3</Link>

        {/* after doing the Linking we will do the Routing  */}
        <Routes>
            <Route path="Comp1/:param1/:param2" element={<Comp1></Comp1>}></Route>
            <Route path="Comp2" element={<Comp2></Comp2>}></Route>
            <Route path="Comp3" element={<Comp3></Comp3>}></Route>
        </Routes>
        </>
    )
}
export default Master;