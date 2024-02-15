import About from "./About";
import Portfolio from "./Portfolio";
import Home from "./Home";
import {Route,Link,Routes} from "react-router-dom";
// we have imported .jsx file a
// now we will create component 
const Main=()=>
{
    return(
        <>
        /* linking component with main class */
        <Link to="/Portfolio" style={{marginRight:100}}>Portfolio</Link>
        <Link to="/About" style={{marginRight:100}}>About</Link>
        <Link to="/Home"style={{marginRight:100}}>Home</Link>
        /* After Linking we will encapsulate it */
        <Routes>
        /* We have to do the routing */

            <Route path="/Portfolio" element={<Portfolio></Portfolio>}>Portfolio</Route>
            <Route path="/Home" element={<Home></Home>}>Home</Route>
            <Route path="/About" element={<About></About>}>About</Route>
        </Routes>

        
        </>
    )
}
export default Main;