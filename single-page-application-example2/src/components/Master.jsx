import { Link,Route,Routes} from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child5 from "./Child5";
import Child6 from "./Child6";
const Master=()=>
{
return(
    <>
    <Link to="/Comp1" style={{marginRight:100}}>Comp1</Link>
    <Link to ="/Comp2" style={{marginRight:100}}>Comp2</Link>
    <Link to="/Comp3" style={{marginRight:100}}>Comp3</Link>
    
   
    <br></br>

    <Routes>
        
        
        <Route path="/Comp1" element={<Comp1></Comp1>}>
            <Route path="Comp1/Child1" element={<Child1></Child1>}></Route>
            <Route path="Comp1/Child2" element={<Child2></Child2>}></Route>
            
        </Route>



        /* encapsulating the child component witht the Master */
        <Route path="/Comp2" element={<Comp2></Comp2>}>
        <Route path="Comp2/Child3" element={<Child3></Child3>}></Route>
        <Route path="Comp2/Child4" element={<Child4></Child4>}></Route>
        </Route>

        
        /*encapsulating the Child5&6 component with Master */
        <Route path="/Comp3" element={<Comp3></Comp3>}>
        <Route path="Comp3/Child5" element={<Child5></Child5>}></Route>
        <Route path="Comp3/Child6" element={<Child6></Child6>}></Route>
        </Route> 
    </Routes>
    
    </>
)

}
export default Master;