import React from 'react';
import Rect from '../dom/rect';
import Circle from '../dom/circle';
import Triangle from '../dom/triangle';

export default class ShapeUI extends React.Component {
  constructor() {
    super();
  }

  buildShape() {
    let shape = this.props.shape;
    let comp;

    switch (shape.type) {
      case 'circle':
        comp = <Circle {...shape.params} />
        break;

      case 'triangle':
        comp = <Triangle {...shape.params} />
        break;

      default:
        comp = <Rect {...shape.params} />
    }

    return comp;
  }

  render() {
    return this.buildShape();
  }
}
