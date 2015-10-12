import Reflux from 'reflux';
import selecteedActions from '../actions/selecteedActions';

import shapesStore from './shapesStore';

export default Reflux.createStore({
  init () {
    this._selected = {
      shapeId: null,
      layer: null
    };

    this.listenTo(shapesStore, this.changeSelected);
  },

  listenables: [selecteedActions],

  getSelected () {
    return this._selected;
  },

  changeSelected () {
    let shape = this.getShape();
    let id = shape ? shape.id : null;

    this.onSelectShape(id);
  },

  onSelectShape (id) {
    this._selected.shapeId = id;
    this.trigger(this._selected);
  },

  getShape () {
    return shapesStore
      .getById(this._selected.shapeId);
  }
});
