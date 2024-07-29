import { Component } from "react";
import "./square.css"


class Square extends Component{
    state={
           array:[],
    }
    addhandler=(()=>{
         const newarray=[...this.state.array,1]
        this.setState({

           array:newarray
        },()=>{})

    });
    render(){
        return(
            <>
            <h2>square component</h2>
            <button onClick={this.addhandler}>add squares</button>
            {
             this.state.array.map((each,index)=>{
                return<div className={(index+1)%2===0?"square-card1":"square-card2"}>
                   {index+1} 
                </div>

             })  
            }
            
            </>
            
        )
    }
    
}
export default Square;