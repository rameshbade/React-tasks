import { fruits } from "./fruits";

const ListItem=()=>
{
   
    return(
        
        <>

        {fruits.map((eachitem)=>{
           return <li key ={eachitem.cost}>{eachitem.name}</li>
           
        })}

        </>
    )
};
export default ListItem;