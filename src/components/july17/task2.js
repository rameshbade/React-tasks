import { Component } from "react";
 import Card from 'react-bootstrap/Card';



class Fakeapi extends Component{
    state={
        product:[],
        loader:true,
        error:false
    } 
    datahandler=async()=>{
      try{
        const resp=await fetch("https://fakestoreapi.com/products");
        const data=await resp.json();
        this.setState({
          product:data,
          loader:false
        })
        }
      catch(error){
          this.setState({
            error:true,
            product:[]
          })

      }
    };
    render()
    {
      return(
        <div>
          <button onClick={this.datahandler}>clickme</button>
          {
            this.state.product.map((each,index)=>{
              return(
              <Card key={index} style={{ width: '300px', height:'200px', border:"2px solid black",margin:"20px" }}>
      <Card.Img variant="top" src= {each.image} width={100} height={100}/>
      <Card.Body>
        <Card.Title>{each.id}</Card.Title>
        <Card.Text>
          {each.category}
        </Card.Text>
      </Card.Body>
     </Card>)
            })
          }
        </div>
      )
          
    }
  
};
export default Fakeapi;



