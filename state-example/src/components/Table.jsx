import { useState } from "react";
const Table=()=>

{
   //taking array as object
   const[Mobile,setMobile]=useState ([{"sno": "1","Company":"Samsung","Cost":"10000","Color":"Red","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/mobile1.jpeg"},
   {"sno": "2","Company":"Nokia","Cost":"20000","Color":"Green","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/mobile2.jpeg"},
   {"sno": "3","Company":"Motorola","Cost":"30000","Color":"Black","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/mobile3.jpeg"},
   {"sno": "4","Company":"Realme","Cost":"40000","Color":"Brown","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/mobile4.jpeg"},
   {"sno": "5","Company":"Apple","Cost":"50000","Color":"Black","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/mobile5.jpeg"}

])
return(
    //create table

    <>
    <table border={2}
           align="Center"
           cellPadding={10}
           cellSpacing={10}>
            <thead>
                <tr>
                    <th>sno</th>
                    <th>company</th>
                    <th>Cost</th>
                    <th>color</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                {//iteration by map
                Mobile.map((element,index)=>
                {
                    return(
                        <tr key={index}>
                            <td>{element.sno}</td>
                            <td>{element.Company}</td>
                            <td>{element.Cost}</td>
                            <td>{element.Color}</td>
                            <td><img src={element.image} width={100} alt="error"></img></td>             
                        </tr>
                    )
                })

                }
            </tbody>
           </table>
    
    </>
)                
}
export default Table;