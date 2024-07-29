import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CustomList from "../customlist/customlist";


const RecipesList=()=>{
    const[array,setarray]=useState([])
      useEffect(()=>{
          let resp=axios.get("https://dummyjson.com/recipes")
          .then(resp=>setarray(resp.data.recipes));

      },[])
    return(
        <>

         <h4>RecipesList</h4>
         {array.map((each)=>{
            return(
                <CustomList list={each.ingredients}/>
            );

         })}
        </>

    )
};
export default RecipesList;