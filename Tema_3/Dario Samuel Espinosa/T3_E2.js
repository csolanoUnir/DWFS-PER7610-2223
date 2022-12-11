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

duplicador([1, 2, 3, 4])

function duplicador (inputArray) {
  let result = inputArray.filter(function (pair) {
    if (pair % 2 == 0) {
      return pair * 2
    }
  })

  let resultPairs = result.map(function (x) {
    return x * 2
  })
  console.log(resultPairs)
}

/**
 * Funcion 2
 *
 * Media
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 *
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
media([1, 2, 3, 4])

function media (inputArray) {
  var result = 0
  inputArray.forEach(function (item, index) {
    result += item
  })
  console.log(result / inputArray.length)
}

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
eliminarDuplicados([5, 1, 2, 1, 3, 3, 4, 5])

function eliminarDuplicados (inputArray) {
  let result
  let resultNoDuplicate = new Array()

  inputArray.forEach(function (item, index) {
    var number1 = item
    result = inputArray.filter(function (number) {
      return number1 == number
    })
    if (result.length == 1) resultNoDuplicate.push(result[0])
  })

  console.log(resultNoDuplicate)
}

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
nCharConsec('*', 4, 'Est* *** es un ejemplo')
nCharConsec('*', 4, 'Est**** es un ejemplo')
nCharConsec('*', 4, 'Est** e* un ej**plo')
function nCharConsec (inpuntChar, numberRepeats, inputString) {
  let result = inputString.split(inpuntChar)
  let countChar = result.length - 1
  resultNoBlancs = result.filter(function (item) {
    return item == ' '
  })
  console.log(numberRepeats == countChar - resultNoBlancs.length)
}

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
 *  [2, 2] (2 /1 = 2)
 * [6, 4] (2+6 /2 = 4)
 * [7, 5] (2+6+7 /3 = 5)
 * [1, 4] (2+6+7+1 /4 = 4)
 */
generador(6)

function generador (numberItems) {
  let arraynumbers = new Array(numberItems)

  for (i = 0; i < arraynumbers.length; i++) {
    arraynumbers[i] = Math.round(Math.random() * 10)
  }
  console.log(arraynumbers)

  resultNoDuplicate = arraynumbers.filter(function (item, index) {
    return arraynumbers.indexOf(item) == index
  })
  console.log(resultNoDuplicate)

  resultNoZero = resultNoDuplicate.filter(function (item) {
    return item != 0
  })
  console.log(resultNoZero)
  let MapCordinates = new Array(resultNoZero.length)

  for (var i = 0; i < resultNoZero.length; i++) {
    MapCordinates[i] = new Array(2)

    MapCordinates[i][0] = resultNoZero[i]
    MapCordinates[i][1] = Math.round(GetAcumualte(resultNoZero, i) / (i + 1))
  }

  show(MapCordinates)
}
function GetAcumualte (arrayElement, nuumberItem) {
  let totalSum = 0
  for (var ia = 0; ia < nuumberItem + 1; ia++) {
    totalSum += arrayElement[ia]
  }
  return totalSum
}

function show (MapCordinates) {
  for (var i = 0; i < MapCordinates.length; i++) {
    console.log(MapCordinates[i])
  }
}
