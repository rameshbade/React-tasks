import { Component } from "react";
import"./counter.css"
class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  
  reset = () => {
    this.setState({
      count: 0,
    });
  };
  decrement=()=>
  {
    this.setState(
      {
          count: this.state.count >0 ? this.state.count-1:0
      }
    )
  };
  

  render() {
    return (
        
      <div className="btn1">
        <h2>my counter</h2>
        <h4>{this.state.count}</h4>
        <button onClick={this.increment} className="btn2">increment</button>
        <button onClick={this.decrement} className="btn2">decrement</button>
        <button onClick={this.reset} className="btn2">reset</button>
      </div>
      
    );
  }
}
export default Counter;