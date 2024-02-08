const Child4=({func_three})=>
{
    return(
    <>
    <button onClick={()=>func_three("python",100,[10,20,30,40],true,
                                 [{"Sno":"101","Sname":"Sone","Ssal":"1000"},
                                  {"Sno":"102","Sname":"Stwo","Ssal":"2000"},
                                  {"Sno":"103","Sname":"Sthree","Ssal":"3000"},
                                  {"Sno":"104","Sname":"Sfour","Ssal":"4000"},
                                  {"Sno":"105","Sname":"Sfive","Ssal":"5000"}])}> Click</button>
    </>
    )

}
export default Child4;