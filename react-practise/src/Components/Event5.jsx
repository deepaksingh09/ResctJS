// importing hooks

const Event5=()=>
{   const func_one=()=>
   
    {
       
console.log("double click button")
    }
    return(
        <>
    <button onDoubleClick={func_one}>Double Click</button>
        </>
    )
}
export default Event5;