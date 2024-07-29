import axios from "axios";
import"./file.css"
import { useState } from "react";
import CustomList from "../customlist/customlist";
import { renderToPipeableStream } from "react-dom/server";
const FoodTask=()=>{
    const[products,setproducts]=useState([])

    
     const addevent=async()=>{
        try{
            const resp=await axios.get("https://dummyjson.com/recipes");
            console.log(resp.data.recipes)
            setproducts(resp.data.recipes)
            
        }
        catch(error){
            console.log("error occured",error)

        }
    };
    //delete one item in table
    const Deletetable=(id)=>{
    const result = products.filter((eachitem,index)=>index!=id)
    setproducts(result);        
    } 
    //delete total items in  a table
    const Delete=()=>{
          setproducts([]);
    }
    //add one item in table
    

    return(
        <>
        <button onClick={addevent}>ADD ITEMS</button>
        <button onClick={Delete}>DELETE ITEMS</button>

        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>INGRIDENTS</th>
                    <th>IMAGES</th>
                    <th>DELETE ITEM</th>
                    <th>ADD ITEM</th>
                </tr>
                </thead>
                <tbody>
                    {products.map((each,id)=>{
                        return(
                            
                            <tr key={id}>
                                <td>{each.id}</td>
                                <td>{each.name}</td>
                                <td><CustomList list={each.ingredients}/></td>
                                <td>{<img src={each.image} alt={"image"} width={200} height={200}/>}</td>
                                <td>{<button onClick={()=>Deletetable(id)}>Delete Button</button>}</td>
                                <td><button>Add Button</button></td>
                            </tr>

                            
                        )

                    }
                    )}

                </tbody>
            </table>
        </div>
        </>
    );
};
export default FoodTask;


