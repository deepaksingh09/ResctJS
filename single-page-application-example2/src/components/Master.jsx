import { Link,Route,Routes} from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
const Master=()=>
{
return(
    <>
    <Link to="/Comp1" style={{marginRight:100}}>Comp1</Link>
    <Link to ="/Comp2" style={{marginRight:100}}>Comp2</Link>
    <Link to="/Comp3" style={{marginRight:100}}>Comp3</Link>
    
   
    <br></br>

    <Routes>
        
        
        <Route path="/Comp1" element={<Comp1></Comp1>}></Route>
        <Route path="/Comp2" element={<Comp2></Comp2>}></Route>
        <Route path="/Comp3" element={<Comp3></Comp3>}> </Route> 
    </Routes>
    
    </>
)

}
export default Master;