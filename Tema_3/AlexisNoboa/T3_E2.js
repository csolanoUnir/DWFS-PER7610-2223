/**
 * En estos ejercicios es obligatorio uso de funciones de primer orden y callbacks sobre estructuras de datos
 * Sera necesario utilizar estructuras de datos diferentes a arrays (tambien arrays)
 * No se permite el uso de bucles for(;;) ni while, se debe usar funciones de primer orden (forEach, filter, map, reduce...)
 */

/**
 * Funcion 1
 * 
 * Duplicador
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion duplicador que recibe como argumento un array de numeros y devuelve otro array duplicando aquellos que sean pares
 * El tamaño del array resultado, por tanto, podra ser distinto del tamaño del array original
 * 
 * Ejemplo: duplicador([1,2,3,4]) -> [4,8]
 */
console.log('Funcion1');
let arreglo=[1,2,3,4];
const duplicador =(arreglo)=>{
    arreglo=arreglo.filter(a => a%2==0).map(valor=>valor*2);
    return arreglo;
}
console.log(duplicador([1,2,3,4]));
/**
 * Funcion 2
 * 
 * Media
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 * 
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
 console.log('Funcion2');
 function media(arreglo){
    let num=0;
    let lon=arreglo.length;
    arreglo.forEach((elemento,indice)=>{
        num+=elemento;
    });
    return num/lon;
 }
console.log(media([1,2,3,4]));
/**
 * Funcion 3
 * 
 * Eliminar duplicados
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion eliminarDuplicados que recibe como argumento un array de numeros con duplicados y devuelve otro cuyos elementos son unicos
 * Se valoraran especialmente soluciones donde sea necesario recorrer el array pasado como argumento una unica vez (de una pasada)
 * 
 * Ejemplo: eliminarDuplicados([5,1,2,1,3,3,4,5]) -> [2,4]
 */

 console.log('Funcion3');
 function eliminarDuplicados(arreglo){
    let cont=0;
    //let arreglo2=arreglo;
    //let aux=arreglo2.join();
    const Set1=new Set();
    //console.log(aux);
    arreglo.forEach((elemento,indice)=>{
        arreglo.forEach((elem)=>{
            if(elemento==elem)
                cont++;
        })
        if(cont==1) {
            Set1.add(elemento);
            cont=0;
        }
        if(cont>=2){
            cont=0;
        }
    });
    //console.log(Set1);
    const arreglo2=Array.from(Set1);
    return arreglo2;
 }
console.log(eliminarDuplicados([5,1,2,1,3,3,4,5]));
/**
 * Funcion 4
 * 
 * Caracteres consecutivos
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion nCharConsec que recibe 3 argumentos:
 * - El caracter por el que se quiere buscar
 * - El numero de repeticiones consecutivas que se desea buscar
 * - La cadena (string) donde buscar
 * Devuelve 'true' si hay N repeticiones del caracter especificado en la cadena, 'false' en caso contrario.
 * Se valoraran especialmente soluciones donde sea necesario recorrer la cadena pasada como argumento una unica vez (de una pasada) sin bucles anidados
 * 
 * Ejemplo: nCharConsec(*, 4, "Est* *** es un ejemplo") -> false (tenemos en cuenta los espacios)
 * Ejemplo: nCharConsec(*, 4, "Est**** es un ejemplo") -> true 
 * Ejemplo: nCharConsec(*, 4, "Est** e* un ej**plo") -> false
 * 
 */

//convertir en array una cadena let array=Array.from(cadena);
console.log('Funcion4');
function nCharConsec(c, num, frase){
    let array=Array.from(frase);
    let cont=0;
    let condicion=false;
    array.forEach((elemento,indice)=>{
        if(elemento==c){
            cont++;
            if(cont==num)
                condicion=true;
        }else{
            cont=0;
        }
    });
    return condicion;
}
console.log(nCharConsec('*', 4, "Est* * **** es un ejemplo"));
/**
 * Funcion 5
 * 
 * Generador de numeros aleatorios
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion generador que recibe 1 argumento:
 * - N: El tamaño del mapa a devolver
 * 
 * Este metodo creara en primer lugar un array de numeros aleatorios no repetidos, de tamaño N.
 * Despues filtrara el array para eliminar los 0 y los duplicados, si hay alguno.
 * Despues, creara un mapa donde: 
 * - Las claves seran los valores de cada una de las coordenadas del array creado
 * - Los valores seran la media de todos los elementos del array filtrado previos anteriores a cada componente del array filtrado, incluyendo el valor del componente actual del array filtrado que se esta utilizando
 * 
 * Ejemplo: generador(6) -> Map()
 * Genera un array aleatorio de numeros, supongamos [2,2,6,7,1,0]
 * Se filtra el array -> [2,6,7,1]
 * Genera y devuelve un mapa conforme a la especificacion, con las siguientes entradas:
 * [2, 2] (2 /2 = 1)
 * [6, 4] (2+6 /2 = 4)
 * [7, 5] (2+6+7 /3 = 5)
 * [1, 4] (2+6+7+1 /4 = 4)
 */
console.log('Funcion5');
function generador(dimension){
    let lista=[];
    let clave=[];
    //let lista=new Array(dimension);
    let arreglo=[];
    let numero=0;
    const Set1=new Set();
    let map=new Map();
    let media=0.0;
    let contador=0;
    let acumulador=0;
    for(let i=0;i<dimension;i++){
        numero=Math.floor(10*Math.random());
        //console.log(numero);
        lista.push(numero);
    }
    lista.forEach((elemento)=>{
        Set1.add(elemento);
    });
    arreglo=Array.from(Set1);
    console.log(arreglo);
    arreglo.forEach((elemento,index)=>{
        if(index==0){
            media=elemento/2;
            clave=[elemento,media];
            map.set(clave,media);
            contador=index+1;
            acumulador=elemento;
        }else{
            acumulador+=elemento;
            contador=index+1;
            media=acumulador/contador;
            clave=[elemento,media];
            map.set(clave,media);
        }
    });
    //console.log(map);
    return map;
}
console.log(generador(6));
