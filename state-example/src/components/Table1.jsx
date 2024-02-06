import { useState } from "react";
const Table1=()=>
{
const[emp,setEmp]=useState([{"Idno":"101","ename":"eone","esal":1000,"edesignation":"Jreng","edept":"CSE","eimage":"https://reqres.in/img/faces/1-image.jpg"},
                            {"Idno":"102","ename":"etwo","esal":1000,"edesignation":"Sreng","edept":"CSE","eimage":"https://reqres.in/img/faces/2-image.jpg"},
                            {"Idno":"103","ename":"ethree","esal":1000,"edesignation":"lead","edept":"CSE","eimage":"https://reqres.in/img/faces/3-image.jpg"},
                            {"Idno":"104","ename":"efour","esal":1000,"edesignation":"intern","edept":"CSE","eimage":"https://reqres.in/img/faces/4-image.jpg"},
                            {"Idno":"105","ename":"efive","esal":1000,"edesignation":"cto","edept":"CSE","eimage":"https://reqres.in/img/faces/5-image.jpg"},
                            {"Idno":"106","ename":"esix","esal":1000,"edesignation":"mang","edept":"CSE","eimage":"https://reqres.in/img/faces/6-image.jpg"},
                            {"Idno":"107","ename":"eseven","esal":1000,"edesignation":"SD-2","edept":"CSE","eimage":"https://reqres.in/img/faces/7-image.jpg"}
])
return(
    <><table border={2}
             align="center"
             cellPadding={10}
             cellSpacing={10}>
                <thead>
                    <tr>
                        <th>Idno</th>
                        <th>ename</th>
                        <th>esal</th>
                        <th>edesignation</th>
                        <th>edept</th>
                        <th>eimage</th>
                    </tr>
                </thead>
                <tbody>
                    {// iteration of emp
                    emp.map((element,index)=>
                    {
                        return(
                            <tr key={index}>
                                <td>{element.Idno}</td>
                                <td>{element.ename}</td>
                                <td>{element.esal}</td>
                                <td>{element.edesignation}</td>
                                <td>{element.edept}</td>
                                <td><img src={element.eimage}width={100}></img></td>
                            </tr>
                        )
                    })
                    }
                </tbody>

    </table>
    </>
)
}
export default Table1;