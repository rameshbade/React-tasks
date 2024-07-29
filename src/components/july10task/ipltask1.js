import Data from "./ipldata";
import Heading1 from "../headings/heading";
import Image from "../image/image";


const Ipltask1=()=>
{
    return(
    
          <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignContent:"center",alignItems:"center"}}>
         {
            Data.map((eachitem)=>{
                
                return(
                <div style={{border:"1px solid black",width:"500px",height:"400px", margin:"50px", borderRadius:"10%",backgroundColor:"green", textAlign:"center"}}>
                    <Heading1 title={eachitem.TeamName} ></Heading1>
                    <Image source={eachitem.LOGO} alt="" width={200} height={200}></Image>
                    <Heading1 title={eachitem.TROPIES}></Heading1>
                </div>
                )
            })
         }
        </div>
    )
};
export default Ipltask1;