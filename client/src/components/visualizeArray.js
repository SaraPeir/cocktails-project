import React, { Component } from 'react';

class VisualizeArray extends Component {
  render() {
    return (
       <ul>{this.props.array.map(x => <li>{x}</li>)}</ul>
    )
  }
}

export default VisualizeArray;
