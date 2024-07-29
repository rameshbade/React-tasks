
const  CustomButton=(props)=>
{
   
   const {text,width,height,color}=props
   
    
    return(
      
      <>
        <button style={{backgroundColor:color,width:width,height:height}}>{text}</button>


        </>
     );
};

export default CustomButton;
