const argv = require( 'yargs' )
                    .option( 'b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la multiplicacion'
                    } )
                    .option( 'l', {
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra en pantalla el resultado'
                    } )
                    .option( 'h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Es el limite de la tabla'
                    } )
                    .check( ( argv, options ) => {
                        if ( isNaN( argv.b ) ) {
                            throw 'La base tiene que ser un numero';
                        }

                        if ( isNaN( argv.h ) ) {
                            throw 'El limite debe ser un numero';
                        }

                        return true;
                    } )
                    .argv;

module.exports = argv;