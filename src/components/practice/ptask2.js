import axios from "axios";
import { useEffect, useState } from "react";



const Practice=()=>{
    const[initialdata,setfinaldata]=useState("")
    useEffect(()=>{
        recipie();
       

    },[])
    
     const recipie=async()=>{
        try{
         const {status,data}=await axios.get("https://dummyjson.com/recipes");
         if(status===200)
         {
            console.log(data)
         }

        }
        catch(error){

        }
     }
    return(
        <>
        <h2>ramesh</h2>
        {/* <h2>total resipelist{initialdata}</h2> */}
        
        </>
        

    )
}
export default Practice;