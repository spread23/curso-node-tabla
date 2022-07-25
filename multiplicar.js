const fs = require( 'fs' );

require( 'colors' );

const createFile = async ( base = 5, hasta = 10, list = false ) => {
    const url   = `./salida/tabla-del-${ base }.txt`;
    let salida  = `-----------------La tabla del ${ base }-----------------`;
    let consola = `-----------------La tabla del ${ base }-----------------`.rainbow;

    for ( let i = 1 ; i <= hasta ; i++ ) {
        consola  += `\n${ base } ${ 'X'.blue } ${ i } ${ '='.red } ${ base * i }`;
        salida += `\n${ base } X ${ i } = ${ base * i }`;
    }

    if ( list ) {
        console.log( consola );
    }

    fs.writeFileSync( url, salida );

    return `tabla-del-${ base }.txt`;
}

module.exports = {
    createFile,
}