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

export default Triangle;
