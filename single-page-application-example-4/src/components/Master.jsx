import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import {Link,Route,Routes} from "react-router-dom";
const Master=()=>
{
    return(
        <>
        <Link to="/Comp1/101/deepak/Developer" style={{marginRight:200}}>Comp1</Link>
        <Link to="/Comp2" style={{marginRight:200}}>Comp2</Link>
        <Link to="/Comp3" style={{marginRight:200}}>Comp3</Link>

        <Routes>
            <Route path="Comp1/:param1/:param2/:param3" element={<Comp1></Comp1>}></Route>
            <Route path="Comp2" element={<Comp2></Comp2>}></Route>
            <Route path="Comp3" element={<Comp3></Comp3>}></Route>
        </Routes>
        </>
    )
}
export default Master;