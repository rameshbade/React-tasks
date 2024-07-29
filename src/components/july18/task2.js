import { Component } from "react";
import axios from "axios";

class Countries extends Component{
    constructor(){
        super()
        this.state={
            countries:[],
            loader:true,
            error:false
        }
    }
    addevent=async()=>{
        try{
            const resp=await axios.get("https://restcountries.com/v3.1/all");
            console.log(resp.data);
            const res=resp.data
            this.setState({
                countries:res,
                loader:false
            });

        }
        catch(error){
            this.setState({
                countries:[],
                error:true
            })

        }
    }
    render()
    {
        return(
            <div>
            <button onClick={this.addevent}>click it</button>
            {this.state.countries.map((each,index)=>{
                return<h2 key={index}>{each.name.official}</h2>
            })}
            </div>
            
        )
    }
}
export default Countries;