import Data from "../july10task/ipldata";
import Heading1 from "../headings/heading";
import Image from "../image/image";


const Ipltask2=()=>
{
    return(
      
  <div style={{display:"flex",verticalAlign:"center",alignItems:"center",flexWrap:"wrap" }}>
   {
    Data.map((eachitem)=>{
      
        return<div style={{border:"1px solid black", width:"30%", height:"400px", textAlign:"center",borderRadius:"10%", margin:"15px", backgroundColor:"yellow"}}>
      <Heading1 title={eachitem.TeamName}></Heading1>
      <Image source={eachitem.LOGO} alt="image" width="200" height="200"></Image>
      <Heading1 title={eachitem.TROPIES}></Heading1>
      </div>
          
    })
   }
  </div>
    )

};
export default Ipltask2;