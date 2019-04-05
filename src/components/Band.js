import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.band.id)
    console.log(this.props) 
  }
  render() {
    return(
      <div>
        <li> {this.props.band.name} </li>
        <button onClick={() => this.handleClick()}>Delete</button>
      </div>
    );
  }
};

export default Band;
