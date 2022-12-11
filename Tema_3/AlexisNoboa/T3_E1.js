/**
 * Funcion 1
 * 
 * Calculo de la letra del DNI (documento de identidad) español
 * 
 * La letra del DNI se obtiene mediante la siguiente funcion matematica
 * - Obtener el resto de la division entera del numero de DNI y el numero 23. 
 * - El resto de esa division se asocia con una letra concreta, segun un array de letras.
 * 
 * Se pide:
 * Crear una funcion obtenerLetraDni que reciba como argumento el numero del DNI y devuelva el numero con su letra asociada.
 * Debe comprobar que el numero recibido sea mayor que 0 y menor y menor que 99999999. Si no es asi, se devuelve 'null'
 * Puedes usar el siguiente array de letras
 * 
 * Ejemplo: obtenerLetraDni(50487965) -> 50487965K
 */
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
function obtenerLetraDni(dni){
    let resultado='';
    let resto=0;
    let letra="";
    if(dni>0 && dni <99999999){
        resto=dni%23;
        letra=letras[resto];
        resultado=dni+letra;
        return resultado;
    }else{
        resultado=null;
        return resultado;
    } 
 }
console.log('Funcion1'); 
console.log(obtenerLetraDni(50487965));
/**
 * Funcion 2
 * 
 * Numeros pares e impares
 * 
 * Se pide:
 * Crear una funcion esPar que devuelva 'true' si el numero recibido es par o 'false' en caso contrario.
 * El argumento es un numero entero
 * 
 * Ejemplo: esPar(4) -> true
 */
 const esPar = (num) =>{
    if(num%2==0)
        return true;
    else
        return false;
 }
 console.log('Funcion2');
 console.log(esPar(2));
/**
 * Funcion 3
 * 
 * Cadenas de texto
 * 
 * Se pide:
 * Crear una funcion formatStr que elimine todos los espacios de una cadena recibida como argumento y que muestre en mayuscula las consonantes de la cadena (cualquier otro caracter se queda como esta)
 * El argumento es una cadena (String)
 * 
 * Ejemplo: formatStr("Esto es un Ejemplo") -> "ESToeSuNEJeMPLo"
 */
 const formatStr=(frase)=>{
    let resultado='';
    let letra='';
    let vocales=['a','e','i','o','u','A','E','I','O','U'];
    let coincide=false;
    aux=frase.split(' ').join("");
    for(let i=0;i<aux.length;i++){
        letra=aux.charAt(i);
        for(let j=0;j<vocales.length;j++){
            
            if(letra==vocales[j])
                coincide=true;
        }
        if(coincide){
            resultado+=letra;
            coincide=false;
        }else{
            letra=letra.toUpperCase();
            resultado+=letra;  
        }
    }
    return resultado;
 }
console.log('Funcion3');
console.log(formatStr("Esto es un Ejemplo"));
/**
 * Funcion 3
 * 
 * Palindromos
 * 
 * Se pide:
 * Crear una funcion esPalindromo que devuelva 'true' si la cadena pasada como argumento es palindroma, 'false' en caso contrario
 * Una cadena es palindroma si se lee igual de derecha a izquierda y de izquierda a derecha, sin tener en cuenta los espacios.
 * El argumento es una cadena (String)
 * 
 * Ejemplo: esPalindromo("Dabale arroz a la zorra el abad") -> true
 */

 const esPalindromo=(frase)=>{
    let f='';
    let invertida='';
    f=frase.split(" ").join("");
    for(let i=f.length-1;i>=0;i--){
        invertida+=f.charAt(i);
    }
    f=f.toLowerCase();
    invertida=invertida.toLowerCase();
    if(f==invertida){
        return true;
    }else
        return false;    
 }
console.log('Funcion4');
console.log(esPalindromo("hola"));
