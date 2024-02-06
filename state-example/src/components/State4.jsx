import { useState } from "react";
const State4 =()=>
{
    const [laptop,setLaptop]=useState([{"sno":"101","Brand":"Hp","color":"Black","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop2.jpeg"},
                                       {"sno":"102","Brand":"asus","color":"Blue","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop3.jpeg"},
                                       {"sno":"103","Brand":"dell","color":"white","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop4.jpeg"},                 
                                       {"sno":"104","Brand":"samsung","color":"red","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop5.jpeg"},
                                       {"sno":"105","Brand":"msi","color":"yellow","image":"https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop6.jpeg"}])

return(
<>
<table border="1px"
       align="center"
       cellPadding="10px"
       cellSpacing="10px">
        <thead>
            <tr>
                <th>SNO</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {
                laptop.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{element.sno}</td>
                            <td>{element.Brand}</td>
                            <td>{element.color}</td>
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
export default State4;