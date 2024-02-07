//  in this we i m going to  create a button

import "./Event1.css";
const Event1=()=>
{
    //creating a function when we click on the button this function will execute
const func_one=()=>
{
    console.log("welcone to click event")
}
    return(
    <>
    <fieldset>
        <legend>Button Events</legend>
    
    <button class="c1" onClick={func_one}>Button</button>
    </fieldset>
    </>
)
}
export default Event1;