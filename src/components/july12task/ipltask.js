// import Data from "../july10task/ipldata"; 
import CustomCard from "../boostrap/card2";
import Heading1 from "../headings/heading";
import { Heading3 } from "../headings/heading";
import Image from "../image/image";

import CustomProgressBar from "../boostrap/progressbar";
const IplteamBootStrap=(()=>{
    const Data=[
        {
            TeamName:" Team Name:R.C.B",
            TROPIES:0,
            LOGO:"https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg"
            
        },
        {
            TeamName:" Team Name:C.S.K",
            TROPIES:4,
            LOGO:"https://i.pinimg.com/736x/4d/00/63/4d00631d22a0cd8556cf55c73db6291f.jpg"
        },
        {
            TeamName:" Team Name:L.S.G",
            TROPIES: 0,
            LOGO:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/lsg-1-1643635816.jpg"
        },
        {
            TeamName:" Team Name:M.I",
            TROPIES:5,
            LOGO:"https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png"
        },
        {
            TeamName:" Team Name:R.R",
            TROPIES:2,
            LOGO:"https://i.pinimg.com/736x/2e/80/64/2e806426a58732ebe889e32970aecbb7.jpg"
            
        },
        {
            TeamName:"TeamName:S.R.H",
            TROPIES:1,
            LOGO:"https://i.pinimg.com/736x/e9/7b/d6/e97bd67435ecd90f54f1a347a3b5e2f1.jpg"
            
        },
    
    ];
    function fn(input){
        let total=18,
        result=(input/total)*100;
        return result;
    }
    
    return(
        <div style={{display:"flex",verticalAlign:"center",alignItems:"center",flexWrap:"wrap",alignContent:"space-between"}}>
        {
            Data.map((eachitem)=>{

                return(
                        <div style={{width:"400px",height:"400px",border:"2px solid black",margin:"10px",textAlign:"center", padding:"20px",borderRadius:"10%"}}>
                            <Heading1 title={eachitem.TeamName}></Heading1>
                            <Heading3  title={eachitem.TROPIES}></Heading3>
                            <Image source={eachitem.LOGO} Alt="image" width={200} height={200} />
                            <CustomProgressBar scale={fn(eachitem.TROPIES)} />
                       </div>
                    
                )

            })
        }
        </div>
    )


});
export default IplteamBootStrap;