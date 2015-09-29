import React from 'react';
import R from 'ramda';

import Rect from '../dom/rect';
import Circle from '../dom/circle';
import Triangle from '../dom/triangle';

import selecteedActions from '../../actions/selecteedActions';

export default class ShapeUI extends React.Component {
  constructor() {
    super();

    this.extend = R.merge({
      onClick: () => { this.selectShape(); }
    });
  }

  selectShape () {
    let id = this.props.shape.id;
    selecteedActions.selectShape(id);
  }

  buildShape() {
    let shape = this.props.shape;
    let params = this.extend(shape.params);
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
