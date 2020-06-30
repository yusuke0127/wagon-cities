import React, { Component } from 'react';

class City extends Component {
  render() {
    // console.log(this.props);
    return (
      <li>{this.props.city.name}</li>
    );
  }
}

export default City;
