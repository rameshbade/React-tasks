import RecipieList from "./recipelist"
import Card from 'react-bootstrap/Card';

const Recipie=()=>{
    return(
        <div>
            {
              RecipieList.recipes.map((each,index)=>{
                return(
                  <Card  key={index} style={{ width: '18rem', border:"2px solid black" }}>
                 <Card.Img variant="top" src={each.image} width={250} height={250}/>
                 <Card.Body>
                 <Card.Title>{each.name}</Card.Title>
                  <Card.Text>
                       {each.ingredients}
                 </Card.Text>
                 </Card.Body>
               </Card>
                );
                
              })  
            }  
        </div>

    )
};
export default Recipie;