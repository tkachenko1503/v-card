import Reflux from 'reflux';
import R from 'ramda';

import controlActions from '../actions/controlsActions';
import DEFAULTS from './defaults';
import {searchById, generateGuid} from '../utils';

export default Reflux.createStore({
  _shapes: [],

  listenables: [controlActions],

  getShapes () {
    return this._shapes;
  },

  onAddShape (shapeType) {
    let shape = {
      attrs: DEFAULTS[shapeType],
      type: shapeType,
      id: generateGuid()
    };

    this._shapes.push(shape);
    this.trigger(this._shapes);
  },

  onRemoveShape (id) {
    let shape = this.getById(id);
    let index = this._shapes.indexOf(shape);

    this._shapes.splice(index, 1);
    this.trigger(this._shapes);
  },

  getById (id) {
    if (id && this._shapes.length > 0) {
      return searchById(id, this._shapes);
    }
  }
});
