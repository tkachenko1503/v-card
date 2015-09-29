import React from 'react';
import Rect from '../dom/rect';
import Circle from '../dom/circle';
import Triangle from '../dom/triangle';

import selecteedActions from '../../actions/selecteedActions';

export default class ShapeUI extends React.Component {
  constructor() {
    super();
  }

  selectShape () {
    let id = this.props.shape.id;
    selecteedActions.selectShape(id);
  }

  buildShape() {
    let shape = this.props.shape;
    let params = Object.assign({
      onClick: () => { this.selectShape(); }
    }, shape.params);
    let comp;

    switch (shape.type) {
      case 'circle':
        comp = <Circle {...params} />
        break;

      case 'triangle':
        comp = <Triangle {...params} />
        break;

      default:
        comp = <Rect {...params} />
    }

    return comp;
  }

  render() {
    return this.buildShape();
  }
}
