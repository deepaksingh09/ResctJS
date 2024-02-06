const Child=({key1,key2,key3,key4,key5})=>
{

return(
    <>
    <h1>{key1}</h1>
  
    <h1>{key2}</h1>
    <h1>{JSON.stringify(key3)}</h1>
    
    {
        key4.map((element,index)=>
        {
            return(
                <h1 key={index}>{element}</h1>)
            })
        }
   <h1>{key1.sno}{key2.sname}</h1>
    </>
)
}
export default Child;
