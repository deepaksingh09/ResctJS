import Child from "./Child";
const Parent=()=>
{
    return(
        <>
        <Child key1={"hello"}
               key2={100}
               key3={true}
               key4={[10,20,30,40,50]}
               key5={{"sno":101,"sname":"sone"}}
               
               ></Child>
        </>
    )
}
export default Parent;
