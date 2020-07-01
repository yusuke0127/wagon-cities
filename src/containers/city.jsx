import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    // REDUX ACTION
    // console.log(this.props.city);
    // console.log(this.props.setActiveCity(this.props.city));
    this.props.setActiveCity(this.props.city);
  }

  render() {
    // console.log(this.props);
    return (
      <li className="list-group-item" onClick={this.handleClick}>{this.props.city.name}</li>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity }, dispatch);
}
export default connect(
  mapStateToProps, mapDispatchToProps)(City);
