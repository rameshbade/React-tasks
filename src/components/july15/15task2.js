import { Component } from "react";
import "./colr.css";

class Conditional1 extends Component {
  number = [1, 2, 3, 4, 5];
  render() {
    return (
    //     <>
    //     {this.number.map((num, index) => (
    //       <p key={index} style={{ color: num % 2 === 0 ? "red" : "yellow" }}>
    //         {num % 2 === 0 ? "This is even" : "This is odd"}
    //       </p>
    //     ))}
    //     <h1>Hello</h1>
    //   </>

      <>
        {this.number.map((num, index) => {
            {console.log(num)}
        return  num % 2 === 0 ? (
            <>
              <h6 key={index} className="container1" >
                the number is even
              </h6>
            </>
          ) : (
            <>
              <h6 className="container2">the number is odd</h6>
            </>
          );
// return(
//         <p  style={{color:(num%2==0)?"red":"yellow"}}>
//         {(num%2==0) ? "This is even" : "This is odd"}
//       </p>)
      
        })}
        <h1>Hello</h1>
      </>
    );
  }
}
export default Conditional1;
