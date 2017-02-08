'use strict';

import Animal from './Animal.js';

class Bilateral extends Animal {
  constructor( name, body ){
    super( name, 'bilateral' );
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(value){
    if (typeof (value) === 'string'){
      this._body = value;
    } else {
      throw new TypeError('Bilateral.body must be a string value');
    }
  }
}
export default Bilateral;
