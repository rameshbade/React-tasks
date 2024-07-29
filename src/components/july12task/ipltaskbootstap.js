import Data from "../july10task/ipldata";
import { Card } from "react-bootstrap";
import CustomProgressBar from "../boostrap/progressbar";
const Kohli=()=>{
    function fn(input){
        let total=18,
        result=(input/total)*100;
        return result;
    }
    return(
       <div style={{display:"flex",verticalAlign:"center",alignItems:"center",flexWrap:"wrap",alignContent:"space-between"}}>
        {Data.map((each,index)=>{
           return <Card style={{ width: '400px', border:"3px solid black", height:'400px', textAlign:"center", margin:"20px", borderRadius:"20"}}>
            <Card.Img variant="top" src={each.LOGO} width={250} height={250}/>
            <Card.Body>
            <Card.Title>{each.TeamName}</Card.Title>
           <Card.Text>
           {each.TROPIES}
         </Card.Text>
         <CustomProgressBar scale={fn(each.TROPIES)}/>
       </Card.Body>
     </Card>
        })}

       </div>

    )
}
export default Kohli;