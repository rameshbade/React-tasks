import { useEffect, useState } from "react";



const Greetings=()=>{
    const[greeting,setgreeting]=useState("")
    useEffect(()=>{
        
        addevent();
    },[])
    
     const addevent=()=>{
        let date=new Date();
        let time=date.getHours();
        console.log(time);
        if(time>0&&time<=12)
        {
            setgreeting("Good-Morning")
        }
        else if(time>12&&time<=3)
        {
            setgreeting("Good- Afternoon")
           
        }
        else if(time>3&&time<=7)
        {
          setgreeting("Good- Evening")
        }
        else{
           setgreeting("Good-Night")
        }

    }
    return(

        <>
        <h4>Hello, User {greeting}</h4>
        {/* <button onClick={addevent}>Click It</button> */}
        </>
    )
};
export default Greetings;