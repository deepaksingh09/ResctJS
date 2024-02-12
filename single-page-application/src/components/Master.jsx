import {Link,Route,Routes} from "react-router-dom";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Household from "./Household";
const Master=()=>
{
  return(
    <>
    /*
    lnking components
     */

        <Link to="/electronics" style={{marginRight:100}}>Electronics</Link>
         <Link to="/fashion" style={{marginRight:100}}>Fashion</Link>
        <Link to="/household" style={{marginRight:100}}>Household</Link>
         <br></br>
     /*enscaplutate routing --below is routing enscaplutate in routes*/ 

        <Routes>
            <Route path="/electronics" element={<Electronics></Electronics>}></Route>
            <Route path="/fashion" element={<Fashion></Fashion>}></Route>
            <Route path="/household" element={<Household></Household>}></Route>
        </Routes>
    
    </>
  )
}
export default Master;