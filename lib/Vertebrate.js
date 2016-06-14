'use strict';

import Bilateral from './Bilateral.js';

class Vertabrate extends Bilateral{
  constructor(name){
    super(name, 'vertebral-column');
    this._name = name;
  }
}
export default Vertabrate;