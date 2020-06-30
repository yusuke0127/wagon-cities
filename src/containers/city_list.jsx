import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city';

class CityList extends Component {
  componentWillMount() {
    // TODO:
    this.props.setCities();
  }

  render () {
    console.log(this.props);
    return (
      <div className="cities">
        <ul className="list-group">
          {this.props.cities.map((city, index) => {
            return <City city={city} index={index} key={city.name} />;
          })
          }
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
