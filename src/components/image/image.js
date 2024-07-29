const Image=(props)=>{
  const{source,alt,width,height}=props
    return(
        <img src={source}     alt={alt} width={width} height={height}  className="ram"/>
    );   
};
export default Image;
