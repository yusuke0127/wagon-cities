import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    console.log(this.props);
    // this.props.selectCity(this.props.city);
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
    { selectCity: selectCity }, dispatch);
}
export default connect(
  mapStateToProps, mapDispatchToProps)(City);
