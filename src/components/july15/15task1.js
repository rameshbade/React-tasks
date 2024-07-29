import React, { Component } from 'react';

class Conditional extends Component {
 
  arr = ["a", "b", "c"];
    
  render() {
    return (
      <>
        
        {this.arr.length === 0 ? <h2>emptylist</h2> : <p>The array length is: {this.arr.length}</p>}
      </>
    );
  }
}

export default Conditional;



