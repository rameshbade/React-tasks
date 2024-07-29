// import axios from "axios";
// import { Component } from "react";
// import "./placment.css"
// import Fakestoreimages from "./images.js"




// class Placementtask extends Component{
//     constructor()
//     {
//         super()
//         this.state={
//             prodcuts:[],
//             loader:false,
//             error:true
//         }
//     }
//     eventhandler=async()=>{
//         try{
//             const resp=await axios.get("https://jsonplaceholder.typicode.com/users");
//             console.log(resp.data);
//             this.setState({
//                 products:resp.data,
//                 loader:false
//             })
//         }
//         catch(error)
//         {
//             this.setState({
//                 loader:true
//             })
//         }
//     }
    
//     render(){
        
//         return(
//             <>
//             {console.log(Fakestoreimages,"hello")}
//             <button onClick={this.eventhandler}>clickme</button>
//             <div className="ram">
//           <table>
//             <thead>
//               <tr>
//                 <th>id</th>
//                 <th>NAME</th>
//                 <th>IMAGES</th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.products.map((each,index) => {
               
//                 return (
//                   <tr key={each.id}>
//                     <td>{each.id}</td>
//                     <td>{each.name}</td>
                    
//                     <td><image src={Fakestoreimages[index]}></image></td>
                    
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div> 
            
            
         
//             </>
//         );
//     }
// }
// export default Placementtask;




import React, { Component } from "react";
import axios from "axios";
import Fakestoreimages from "./images.js";
import "./placment.css";

class Placementtask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loader: true, // Initially set loader to true
      error: false, // Initially set error to false
    };
  }

  eventhandler = async () => {
    try {
      const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(resp.data);
      this.setState({
        products: resp.data,
        loader: false,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({
        loader: false,
        error: true,
      });
    }
  };

  render() {
    return (
      <>
      {console.log(Fakestoreimages[0])}
        <button onClick={this.eventhandler}>Click Me</button>
        <div className="ram">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMAGES</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((each, index) => (
                <tr key={each.id}>
                  <td>{each.id}</td>
                  <td>{each.name}</td>
                  <td>
                    <img src={Fakestoreimages[index]} alt={`Product ${index}`}  width={200} height={200}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Placementtask;
