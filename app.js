
// ------------------------INSTRUCCIONES ------------------------------

// 1-Escriban y prueben con console.log:
// Después de cada paso, utilicen console.log para ver los resultados intermedios y verificar el progreso. Prueben distintos valores de entrada para asegurarse de que el código funcione en varios casos.

// 2-Comenten el código:
// A medida que avancen, agreguen comentarios explicativos en cada parte importante del código para que todos los miembros del grupo comprendan cómo funciona. Esto también facilitará que otros entiendan el código al revisarlo.

// 3-Hagan pruebas adicionales:
// Una vez que crean que el código está listo, prueben al menos tres ejemplos diferentes, incluyendo casos con valores inesperados o límites (como cadenas vacías, números negativos, etc.) para ver cómo responde el código.

// 4-Revisen y optimicen en grupo:
// Juntos, revisen si hay partes del código que podrían mejorar o simplificar. Si descubren un enfoque mejor, intenten implementarlo y ver cómo se comporta en comparación con el anterior.


// ----------------------------------------------------------------------

// Ejercicio 1: "Cuántos caracteres faltan"
// Instrucción:
// De una función que recibe una frase y un número. La función debe retornar cuánto le falta o cuánto se pasa la frase del número dado.

// Pista:
// Sabes cómo calcular la diferencia entre la longitud de algo y un número específico. Considera usar .length para obtener la longitud de la frase y comparar esta longitud con el número dado. Si necesitas calcular la diferencia, una resta simple te ayudará.

var cuantosFaltan = (frase,num) => {
    return Math.abs(frase.length-num);
}
console.log(cuantosFaltan("esto",2));

// ----------------------------------------------------------------------
// Ejercicio 2: "¿Pasa o no pasa?"
// Instrucción:
// Crea un programa que reciba una calificación y devuelva "Aprobado" si es mayor a 70, "Extraordinario" si es entre 50 y 69, y "Reprobado" si es menor de 50.

// Pista:
// Tendrás que hacer varias comparaciones en tu función para cubrir cada caso posible. Para verificar rangos de calificación, utiliza operadores de comparación (como <, >, >=, <=) dentro de una estructura if...else if...else.

function evaluarCalificacion(calificacion) {
    if (calificacion > 70) {
        console.log(`Calificación: ${calificacion} - Resultado: Aprobado`); //if valida si la calificación > 70 es verdadera, en ese caso imprime el msj Aprobado.
    } else if (calificacion >= 50 && calificacion <= 69) {
        console.log(`Calificación: ${calificacion} - Resultado: Extraordinario`); //else if al ver que calificación > 70 es falso, verifica la calificación si es mayor o igual a 50 y menor o igual a 69, en ese caso imprime el msj Extraordinario.
    } else {
        console.log(`Calificación: ${calificacion} - Resultado: Reprobado`); //else verifica que ninguna de la condiciones anteriores fue verdadera, en ese caso imprime el msj Reprobado.
    }
}
evaluarCalificacion(80); //ej de calificaciones para visualizar msj
evaluarCalificacion(55); //ej de calificaciones para visualizar msj
evaluarCalificacion(40); //ej de calificaciones para visualizar msj

// ----------------------------------------------------------------------

// Ejercicio 3: "Capitalizar frase"
// Instrucción:
// Escribe una función que reciba una frase y devuelva la misma frase, pero con la primera letra de cada palabra en mayúscula.

// Pista:
// Piensa en una forma de dividir la frase y transformar cada palabra por separado, split puede ayudarte a dividir la frase en palabras, luego puedes aplicar charAt() y toUpperCase() a la primera letra de cada palabra y, por último, unir las palabras modificadas con join.


var frase = "este ejercicio fue bastante complejo de hacer";
var palabras = frase.split(" ");
for (var i = 0; i < palabras.length; i++) { 
  var primeraLetra = palabras[i].charAt(0).toUpperCase();
  var restoPalabra = palabras[i].slice(1);
  palabras[i] = primeraLetra + restoPalabra;
}
var resultado = palabras.join(" ");
console.log(resultado);

// ----------------------------------------------------------------------

// Ejercicio 4: "Redondeo al número más cercano"
// Instrucción:
// Dado un número decimal, redondea al entero más cercano y devuelve el resultado.

// Pista:
// Revisa si JavaScript tiene alguna función que trabaje con decimales y enteros.

// Array con distintos numeros decimales
var decimales = [1, 2, 3, 0.2, 8.73, 3.43, 4.32, 7.82];
// Bucle for para comprobar cada valor
for (var i = 0; i < decimales.length; i++){
    // Condición para comprobar si los números son decimales o enteros
    // "Si de los valores de este array, el restante de la division de cada valor por '1' es distinto a 1..."
    if(decimales[i] % 1 != 1){
        // "...Entonces aplica el método "Math.round" e imprímelo en consola.
        console.log(Math.round(decimales[i]))
    }
}

// ----------------------------------------------------------------------

// Ejercicio 5: "Palabras únicas"
// Instrucción:
// De función que recibe una oración retorna cuántas palabras únicas tiene (sin contar las repetidas).

// Pista:
// Primero necesitarás una forma de dividir la frase en palabras.
// Puedes usar split para separar la oración en palabras. Después, usa un bucle o filter para encontrar las palabras únicas y luego contar su cantidad. Set también puede ayudarte a eliminar duplicados.


var oracion = "esto es una oracion con dos dos palabras palabras repetidas"
var nueva = oracion.split(" ")

const result = nueva.reduce((nueva2,item)=>{
    if(!nueva2.includes(item)){
      nueva2.push(item);
    }
    return nueva2;
  },[])
console.log(result)



// ----------------------------------------------------------------------

// Ejercicio 5: "El más largo de los tres"
// Instrucción:
// Dada una lista de tres palabras, devuelve la más larga. Si hay dos o más palabras de igual longitud, devuelve cualquiera de ellas.

// Pista:
// Considera cómo podrías comparar elementos para obtener el más largo.
// Para comparar las palabras, usa .length en cada una y guarda la más larga en una variable. Un if o un Math.max() para comparar las longitudes también sería útil.

const lista = ["hola", "como", "estas", "hoy"]

const buscador = (lista)=>{
  maslarga = lista != 0 ? maslarga=lista[0] : maslarga=["a"]
  for (let i = 0; i < lista.length; i++) {
      if (lista[i].length > maslarga.length) {
          maslarga = lista[i]
      }
  }
  console.log(maslarga)
}

buscador(lista)



// ----------------------------------------------------------------------

// Ejercicio 6: "Desglose de números pares"
// Instrucción:
// Una función que tome un número y devuelva una lista de todos los números pares que hay desde el 0 hasta ese número, incluidos el 0 y el número dado si son pares.

// Pista:
// Recuerda que un número es par si al dividirlo por 2 el resto es cero.
// Un bucle for es una buena opción para generar la lista de números. Usa el operador % para verificar si un número es par (num % 2 === 0). Puedes ir agregando cada número par a un arreglo.

var numerosPares = (num) => {
    var pares = [];
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares;

}
console.log(numerosPares(26))

// ----------------------------------------------------------------------

// Ejercicio 7: "Invertir palabras"
// Instrucción:
// Dada una frase, devuelve una nueva frase con el orden
// de las palabras al revés.

// Pista:
// ¿Cómo podrías dividir y luego reorganizar las palabras?

var reverse2 = (cadena) => {
    
    return cadena.split(" ").reverse().join(" ");
    
}
console.log(reverse2("hola como estas"));





