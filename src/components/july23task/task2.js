import { useState } from "react";
import "./square.css"



const Squares=()=>{
    const[square,setsquares]=useState()
      


     const addevent=()=>{
        setsquares()

    }


    return(
        <>

        <button onClick={addevent}>add squares</button>
        {}
        </>

    )
};
export default Squares;