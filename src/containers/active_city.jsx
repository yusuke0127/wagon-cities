import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="active-city">
        if (this.props.selectedCity) {
          <h3>{this.props.selectedCity}</h3>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
