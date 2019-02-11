import { expect } from 'chai';
import { Layer } from '../layer.js';
import { LayerUtil } from '../util.js';

let layer1 = new Layer( { x: 100, y: 100, width: 100, height: 100 } );
let layer2 = new Layer( { x: 250, y: 250, width: 100, height: 100 } );
let layer3 = new Layer( { x: 200, y: 200, width: 100, height: 100 } );

it( 'If two layers overlap', () => {

    expect( LayerUtil.doOverlap( layer1, layer2 ) ).to.equal( false );
    expect( LayerUtil.doOverlap( layer3, layer2 ) ).to.equal( true );

} );