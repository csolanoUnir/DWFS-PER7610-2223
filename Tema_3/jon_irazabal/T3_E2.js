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

const duplicadorPares = arrayNumeros => {
    return arrayNumeros.filter(function (x) {
        return (x % 2 == 0);
    }).map(function (x) {
        if (x % 2 == 0)
            return x * 2;
    });
}
console.log("Duplicar pares: [1,2,3,4]: " + duplicadorPares([1, 2, 3, 4]));

/**
 * Funcion 2
 * 
 * Media
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 * 
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
const reducer = (accumulator, currentValue) => accumulator + currentValue; 
const media = arrayNumeros => {
    return arrayNumeros.reduce(reducer) / arrayNumeros.length;
}
console.log("Media del array: [1,2,3,4]: " + media([1, 2, 3, 4]));

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
const eliminarDuplicados = arrayNumeros => {
    return arrayNumeros.sort().filter((element, index, self) => {
        return element !== self[index - 1] && element !== self[index + 1];
    });
}

console.log("Eliminar duplicados: [5,1,2,1,3,3,4,5]: " + eliminarDuplicados([5, 1, 2, 1, 3, 3, 4, 5]));

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

const nCharConsec = (character, count, text) => {
    return text.split('').reduce(function (charCount, item) {
        if (item === character) {
            return charCount + 1;
        }
        else if (charCount < count) return 0;
        else return charCount;
    }, 0) === count;
}

console.log("¿ * aparece 4 veces seguidas en el texto: 'Est * *** es un ejemplo' ? -> " + nCharConsec("*", 4, "Est* *** es un ejemplo"));
console.log("¿ * aparece 4 veces seguidas en el texto: 'Est**** es un ejemplo' ? -> " + nCharConsec("*", 4, "Est**** es un ejemplo"));
console.log("¿ * aparece 4 veces seguidas en el texto: 'Est** e* un ej**plo' ? -> " + nCharConsec("*", 4, "Est** e* un ej**plo"));

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
const mediaListaRandom = count => {
    var map = new Map();
    var array = Array(count).fill().map(function (x) {
        return Math.round(Math.random() * 9);
    }).filter((element, index, self) => {
        return (element != 0 && index === self.indexOf(element));
    });
    console.log("Array(" + count + " valores random) con elementos unicos: " + array);
    array.reduce(function (media, item) {
        map.set(item, ((media + item) / (array.indexOf(item) + 1)));
        return (media + item);
    }, 0);
    return map;
}

console.log(mediaListaRandom(6).entries());
