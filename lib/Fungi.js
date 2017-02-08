'use strict';

import Eukaryota from './Eukaryota.js';

class Fungi extends Eukaryota{
  constructor(name){
    super( name, false, true, false, true );
  }
}
export default Fungi;
