import React from 'react';

class Triangle extends React.Component {
  render() {
    return (
      <polygon {...this.props}></polygon>
    );
  }
}

export default Triangle;
