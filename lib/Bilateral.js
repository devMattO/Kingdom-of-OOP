'use strict';

import Animal from './Animal.js';

class Bilateral extends Animal {
  constructor( name, body ){
    super( name, 'bilateral', body );
    this._name = name;
    this._body = body;
  }
  get body(){
    return this._body;
  }
  set body(value){
    this._body = value;
  }
}
export default Bilateral;