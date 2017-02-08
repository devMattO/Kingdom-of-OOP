'use strict';

import Eukaryota from './Eukaryota.js';

class Animal extends Eukaryota {
  constructor( name, symmetry ) {
    super( name, false, false, true, true, symmetry );
    this._symmetry = symmetry;
  }
  get symmetry() {
    return this._symmetry;
  }
  set symmetry( value ) {
    if (typeof (value) === 'string'){
      this._symmetry = value;
    } else {
      throw new TypeError('Animal.symmetry must be a string value');
    }
  }
}
export default Animal;
