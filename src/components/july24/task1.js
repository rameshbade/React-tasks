import axios from "axios";
import { useEffect,useState } from "react";
import { Table } from "react-bootstrap";
import CustomList from "../customlist/customlist";
const ListofRecipie=()=>{
    const[array,setarray]=useState([]);
   useEffect(()=>{
     const resp=fetch("https://dummyjson.com/recipes")
     .then(resp=>resp.json())
     .then(data=>setarray(data.recipes));
   },[])
    return(
            <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>NAME</th>
          <th>ID</th>
          <th>INGRIDENTS</th>
          <th>IMAGE</th>
        </tr>
      </thead>
      <tbody>
        {array.map((each,id)=>{
            return(
            <tr key={id}>
            <td>{each.id}</td>
            <td>{each.name}</td>
            <td><CustomList list={each.ingredients}/></td>
            <td><img src={each.image} width={200} height={200}/></td>
          </tr>
            )
        })}
        
      </tbody>
    </Table>
           
            </>
    )
};
export default ListofRecipie;