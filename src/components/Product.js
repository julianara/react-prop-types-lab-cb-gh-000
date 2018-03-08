import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        {this.props.producer ? <p>{this.props.producer}</p> : null} 
        <p>Watermark: {this.props.hasWatermark ? "yes" : "no"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}
  
Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired, 
  weight: function(props, propName) {
    const weight = props[propName];
    if (weight === undefined ) {
       return new Error('The `weight` prop should range between 80 and 300.');
    }
    else if (isNaN(weight)) {
       return new Error('The `weight` prop is not a number.');
    }
    
    const isValid = weight >= 80 && weight <= 300;
    
    if (!isValid) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}