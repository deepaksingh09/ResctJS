import { useState } from "react";
const State3=()=>
{
 const[product,setProduct]=useState([{"pid":"101","pname":"pone","psal":10000},
                                    {"pid":"102","pname":"ptwo","psal":20000},
                                    {"pid":"103","pname":"pthree","psal":30000},
                                    {"pid":"104","pname":"pfour","psal":40000},
                                    {"pid":"105","pname":"pfive","psal":50000}])                                
    return(
        //1. creating table
        <>
        <table
              border={2}
              align="center"
              cellPadding={10}
              cellSpacing={10}>
                <thead>
                    <tr>
                        <th>pid</th>
                        <th>pname</th>
                        <th>psal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //iterating the arr
                        //element--object
                        //pid,pname,psal--value
                        //to print we use "object.id" method

                        product.map((element,index)=>{
                          return<tr>key={index}
                          <td>{element.pid}</td>
                          <td>{element.pname}</td>
                          <td>{element.psal}</td>
                          </tr>  
                          
                          


                        
                    })
                    }
                </tbody>
                <tfoot></tfoot>
        </table>
        </>
    )
}
export default State3;