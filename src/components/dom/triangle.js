import React from 'react';

class Triangle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <polygon {...this.props}></polygon>
    );
  }
}

Triangle.defaultProps = {
  points:"125,20 200,170 50,170",
  style: {
    fill: 'red',
    stroke: 'black',
    strokeWidth: 5,
    opacity: 0.5
  }
};

export default Triangle;
