import React, { Component } from 'react';
import loading from "./Spinner-1s-200px.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3  '>
        <img src={loading} alt="" height="60px"/>
      </div>
    )
  }
}

export default Spinner
