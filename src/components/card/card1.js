import"./card1.css"
import CustomButton from "../button/button";

const Card1=()=>
{
    return(
        <div className="card">
            <img src= "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=" " width={200} height={200}/>
            <h4>price:200</h4>
            {/* <CustomButton colorCode={"red"}></CustomButton> */}
            <CustomButton text="seemore" width={250} height={30} color={"red"}></CustomButton>

        </div>
    )
};
export default Card1;