import React from 'react';

class Rect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <rect {...this.props}></rect>
    );
  }
}

export default Rect;
