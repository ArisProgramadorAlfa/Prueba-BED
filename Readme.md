# Prueba BED

En este respositorio se resuelven los siguientes ejercicios mediante funciones hechas en **javascript**

1. Escribir una función que reciba un arreglo de números y obtenga el subarreglo más
grande en el que cada elemento del subarreglo sea mayor que el anterior. Por ejemplo si
el arreglo es [3,2,5,9,1,3] tiene que regresar [2,5,9].
2. Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de
n+(n+1)+(n+2)+...+m.
3. Dado un arreglo de números desordenado y un entero k, escribe una función que
encuentre el k-ésimo elemento más grande.
4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados.
5. Dada una cadena de paréntesis y corchetes escribe una función que regresa si la
cadena está bien balanceada, es decir, por cada paréntesis o corchete que abre hay uno
al mismo nivel que que cierra. Por ejemplo si recibe ‘([])’ tiene que regresar true y si
recibe ‘([)]’ tiene que regresar false.
6. Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que
acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a
14:00 no puede estar en el mismo salón que una de 12:00 a 15:00. Escribe una función
que encuentre ese número de salones, por ejemplo si tienes clases de 11:00 a 14:00,
12:00 a 15:00 y 14:30 a 16:00 el menor número de salones es 2.


## Resolución general
- En general los ejercicios estuvieron interesantes de resolver, ya que el principio parecian faciles
pero al momento de irlos desarrollando, se me fueron ocurriendo otras formas de solucionarlos,
es por eso que en algunos los optimice despues de haberlos resuelto y en un punto hacer funciones 
genéricas para que las usaran mas de un ejercicio.
- Algo interesante fue poder usar Mocha para hacer pruebas unitarias, esta parte me gusto por que 
es una manera mas automatizada de hacer pruebas en las funciones que se desarrollaron, incluso 
se me ocurrio una manera de simplificar el código para hacer las pruebas mediante una variable 
con los datos de los test de algunos ejercicios, esto también lo implemente  y funciono bien.
- Estuvo entretenido y divertodo resolver los ejercicios.


## Prueba

### Instalación de dependencias
 - Antes de poder hacer pruebas es necesaro instalar las dependencias de node para poder 
 ejecutar las pruebas unitarias, para esto se debe situar en el directorio raíz del 
 repositorio y ejecutar el siguiente comando:
 ```
 npm i
 ```
 - Una vez hecho esto, solo hay que ejecutar el siguiente comando para ejecutar las pruebas 
 con Mocha y ver los resultados que arroja:
 ```
 npm test
 ```

 - Aún se pueden modificar las pruebas unitarias modificando la data de para los test en el
 archivo /test/data.js e incluso hacer unas cuantas optimizaciones, que por el tiempo ya 
 no las pude realizar.