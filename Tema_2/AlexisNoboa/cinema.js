/**
 Archivo con todo el codigo JS necesario para implementar la funcionalidad de reserva de sitios
 Queremos crear un sencillo sistema de gestion de entradas de una sala de cine. Para ello nos serviremos de los metodos:
 - initialize: Inicializa la sala, representada por una matriz NxN (siempre cuadrada)
 - show: Muestra el estado de la sala (butacas libres y ocupadas)
 - suggest: Sugiere una opcion de reserva en base al numero de butacas que se quieren
 - order: Reserva aquellas butacas que suggest haya indicado.
 Las declaraciones de las cabeceras de los metodos NO DEBEN MODIFICARSE.
 Deberás:
 - Crear una variable que almacene el estado de la sala (pon especial atención al tipo de esta variable y su ámbito)
 - Implementar todos los métodos indicados anteriormente.
 Puedes usar el siguiente programa principal para probar
*/
//-------------------------------------------------------------------------------------------
//Programa principal (para comprobar el correcto funcionamiento - puede ser modificado)

//Creamos la sala y la mostramos (deberia estar toda vacia)
var asientos =[];
var size=4;
var asientosRequeridos=6;
const readline=require('readline');

var interfazCaptura=readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

initialize(size);
console.log("Estado inicial de la Sala");
show();

//Obtenemos los valores de algunas sugerencias
let suggestion1 = suggest(asientosRequeridos);
//let suggestion2 = suggest(8);//let suggestion3 = suggest(11);
//console.log(suggestion1);
//console.log(suggestion2);
//console.log(suggestion3);

//Reservamos butacas
//let reservation1 = order(6);
//let reservation2 = order(8);
//let reservation3 = order(3);
//let reservation4 = order(11);
//console.log(reservation1);
//console.log(reservation2);
//console.log(reservation3);
//console.log(reservation4);

//Mostramos el estado de la sala
//show();

//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala


//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */
function initialize(size) {

    var filas=size;
    var columnas=size;
    //var asientos =[];

    for (let i = 0; i < filas; i++) {

        for(let j=0;j<columnas;j++){

            asientos[i]=[[]];
        }
        
    }

    for (let i = 0; i < filas; i++) {

        for(let j=0;j<columnas;j++){

            asientos[i][j]="-";
        }

    }
}

/**
 * show - No recibe argumentos
 * Devuelve un String que representa el estado actual de la sala.
 * Formato: X para asientos ocupados, - para asientos libres.
 * Ejemplo (3x3):
 * - - X
 * - X -
 * X X X
 * 
 */
function show() {

    let filas=columnas=size;

    for (let i = 0; i < size; i++) {

            console.log(asientos[i]);
    }
}


/**
 * suggest - Dada una cantidad de butacas deseadas, devuelve una posible acomodacion
 * Devuelve un String indicando la fila y columna de la butaca
 * La sugerencia debe contener butacas que esten siempre en la misma fila. Si no es posible, se devolvera 'null'
 * Ejemplo: suggest(3)
 * Resultado: F6B6, F6B7, F6B8 (fila 6, butacas 6, 7 y 8)
 * 
 * Esta operacion NO RESERVA ninguna butaca, solo ofrece una sugerencia. El criterio para ofrecer la sugerencia es de libre eleccion.
 * @param {*} requestSize 
 */
function suggest(requestSize) {
    
    const mitad=size/2-1;
    let asientoSugerido=requestSize;
    var confirmar="";
    var asientosS =[];

    asientosS=asientos;

    for (let i = 0; i < size; i++) {
        
        if(i==mitad){

            for(let j=0;j<size;j++){

                if( asientosS[i][j]=="-" && asientoSugerido>0){

                    asientosS[i][j]="o";
                    asientoSugerido--;
                }
            }

        }else if(i==mitad+1){

            if(asientoSugerido>0){

                for(let j=0;j<size;j++){
                    
                    if( asientosS[i][j]=="-" && asientoSugerido>0){

                        asientosS[i][j]="o"; 
                        asientoSugerido--;
                    }
                }
            }
        }
    }

    if(asientoSugerido>0){
        
        for (let i = 0; i < size; i++) {
        
            for(let j=0;j<size;j++){

                if( asientosS[i][j]=="-" && asientoSugerido>0){

                    asientosS[i][j]="o"; 
                    asientoSugerido--;
                }
            }
        }    
    }


  
    console.debug("Asientos sugeridos");

    for (let i = 0; i < size; i++) {

        console.log(asientosS[i]);

    }

    //console.log(asientos);

    interfazCaptura.question('Aceptar sugerencia?  ', function(respuesta){
        
    if(respuesta=='si'){

        asientos=asientosS;

        for(let i=0;i<size;i++){

            for(let j=0;j<size;j++){

                if(asientos[i][j]=='o'){

                    asientos[i][j]='x';
                }
            }
        }

        console.debug("Asientos reservados");
        show(); 
        interfazCaptura.close();

    }else{

        for(let i=0;i<size;i++){

            for(let j=0;j<size;j++){

                if(asientos[i][j]=='o'){

                    asientos[i][j]='-';
                }
            }
        }

        console.debug();
        let reservation1 = order(requestSize);
        console.debug("Asientos ordenados");
        show(); 
        interfazCaptura.close();
    }
    });
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {

    asientoSugerido=requestSize;

    for (let i = 0; i < size; i++) {
        
        for(let j=0;j<size;j++){
    
            if( asientos[i][j]!="x" && asientoSugerido>0){

                asientos[i][j]="x"; 
                asientoSugerido--;
            }
        }
    } 
    
    if(asientoSugerido>0){
        console.log("No existen lugares suficientes");
    }
}
