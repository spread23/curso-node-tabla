const { createFile } = require( './multiplicar' );
const argv           = require( './config' );
const colors         = require( 'colors' );

createFile( argv.b, argv.h, argv.l )
    .then( ( file ) => { console.log( `Archivo ${ file } creado`.rainbow ); } )
    .catch( console.log );