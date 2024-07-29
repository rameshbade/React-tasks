import { Component } from "react";
import axios from "axios";
import "./table.css";
import Image from "../image/image";


class Recipiedata extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loader: true,
      error: false,
    };
  }

  adddevnt = async () => {
    
    try {
      const resp = await axios.get("https://dummyjson.com/recipes");
      console.log(resp.data);
      const result = resp.data;
      this.setState({
        products: result.recipes,
        loader: false,
      });

      console.log(this.state.products)
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };
  render() {
    return (
      <>
        <button onClick={this.adddevnt}>clickme</button>

       <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>NAME</th>
                <th>INGRIDENTS</th>
                <th>Image </th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((each) =>{
                // console.log(each, "each");
                return (
                  <tr key={each.id}>
                    <td>{each.id}</td>
                    <td>{each.name}</td>
                    <td>{each.ingredients}</td>
                    <td>{<img src={ each.image} width={200} height={200}/>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>  
      </>
    );
  }
}
export default Recipiedata;
