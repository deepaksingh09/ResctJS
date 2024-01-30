import Comp1 from "./Comp1";
const Comp2=()=>{
    return(//including comp1 in comp2
    <>
    <Comp1></Comp1>
    <h1>Welcome to Comp2</h1>
    </>
    )
}
//making it public
export default Comp2;