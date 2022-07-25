(() => {

    function printToConsole ( constructor: Function ): void {
        console.log( constructor );
    }

    function printToConsoleConditional ( print: boolean = false ): Function {
        if ( print ) {
            return printToConsole;
        } else {
            return () => {}
        }
    }

    const bloquearPrototipo = function ( constructor: Function ): void {
        Object.seal( constructor );
        Object.seal( constructor.prototype );
    }

    @bloquearPrototipo
    @printToConsoleConditional( true )
    class Pokemon {
        public apiUrl: string = 'https://apiPokemon.com';

        constructor (
            public name: string
        ) {}
    }

    const charmander: Pokemon = new Pokemon( 'Charmander' );

    console.log( charmander );

    (Pokemon.prototype as any).cutomName = 'Pikachu';

})();