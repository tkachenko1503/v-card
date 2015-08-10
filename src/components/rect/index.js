import React from 'react';

class Rect extends React.Component {
  render() {
    return (
      <rect {...this.props}></rect>
    );
  }
}

export default Rect;
