import React from 'react';
import { connect } from 'react-redux';

// class ActiveCity extends Component {

//   // if (!this.props.activeCity) {
//   //   city = (this.props.activeCity);
//   // }

//   render() {
//     console.log(this.props.activeCity);
//     return (
//       <div className="active-city">
//         <h3>{this.props.activeCity.name}</h3>
//       </div>
//     );
//   }
// }
const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={url} alt="" width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
// if (!props.activeCity) {
//     return (
//       <div className="active-city">
//         <p>Select a city...</p>
//       </div>
//     );
//   }
