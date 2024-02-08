// is this we have to link with child by parent
import Child from "./Child";
const Parent=()=>{
    const func_one=(param1)=>{

    }
    return(
        <>
        <Child func_one={func_one}></Child>
        
        </>
    )
}
export default Parent;