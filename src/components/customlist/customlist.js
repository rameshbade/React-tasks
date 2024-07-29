



const CustomList=((props)=>{
    const{list}=props
    return(
        <ol>
            {
                 list.map((eachitem)=>{
                    return <li>{eachitem}</li>
    
                })
            }
        
           
        
        </ol>
    )
});
export default CustomList;