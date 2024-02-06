const Subchild2 = ({msg,obj,num,flag,arr,obj1})=>
{
return(
    <>
    <h1>{msg}</h1>
    <h1>{obj.key1}.....{obj.key2}</h1>
    <h1>{num}</h1>
    <h1></h1>
    {
        arr.map((element,index)=>{
            return(
                <h1 key={index}>{element}</h1>)
        })
    }
    {
        //creating table and iteration of table 
        <table align="center"
                border={2}
               cellPadding={10}
               cellSpacing={10}>
                <thead>
                    <tr>
                        <td>Sno</td>
                        <td>Sname</td>
                       
                        <td>Ssal</td>
                    </tr>

                </thead>
                <tbody>
                    {//iteration
                    obj1.map((element,index)=>{
                        return(<tr key={index}>
                            <td>{element.Sno}</td>
                            <td>{element.Sname}</td>
                           
                            <td>{element.Ssal}</td>

                        </tr>)

                    })
                    }
                </tbody>

        </table>
    }
     </>
)
}
export default Subchild2;