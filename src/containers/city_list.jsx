import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  render () {
    console.log(this.props);
    return (
      <div className="cities">
        <ul className="list-group">
          {this.props.cities.map((city, index) => {
            return <City city={city} index={index} />;
          })
          }
        </ul>
      </div>
    );
  }
}

export default CityList;
