import { Component } from "react";
import axios from "axios";

class Fetch extends Component{
    constructor(){
        super()
        this.state={
            products:[],
            loader:true,
            error:false
        }

    }
    addeventlistener=async()=>{
        try{
            const resp= await axios.get("https://fakestoreapi.com/products")
            console.log(resp);
            const result=resp.data
            this.setState({
                products:result,
                loader:false

            })

            }

        
        catch{
            this.setState({
                products:[],
                error:true
            })

        }

    }




    render(){
        return(
            <div>
                <button onClick={this.addeventlistener}>clickme</button>
                {this.state.products.map((each,index)=>{
                    return <h4 key={index}>{each.id}</h4>

                }
                )}
            </div>

        )
    }

}
export default Fetch;