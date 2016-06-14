'use strict';

import Eukaryota from './Eukaryota.js';

class Plant extends Eukaryota{
  constructor( name ){
    super( name, false, true, false, false );
  }
}
export default Plant;