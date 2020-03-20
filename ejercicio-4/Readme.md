# Ejercicio 4

4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados.

## resolución
- Este ejercicio a simple vista parece simple, el detalle aquí es poder darle solucion 
con el menor npumero de procesos posibles, ya que para arreglos pequeños casi cualquier 
solución resolvería el problema pero el detalle es cuando sean arreglos realmente grandes,
es ahí cuando se notaría la diferencia entre un código que solo soluciona el problema y 
un código que solucione el problema con el menor núumero de procesos pisibles, es por eso 
que decidi hacer este proceso en 3 partes:
1. Crear un objeto con las llaves de los números que contiene el arreglo original y 
cuando se repitan estos, el valor correspondiente a cada llave incrementara en uno.
2. Obtener las llaves del objeto creado.
3. Convertir las llaves del objeto en enteros, ya que cuando se obtienen las llaves,
estas son devueltas como string.
Con esto solo necesitamos recorrer dos arreglos, el original y el final que contiene 
menos números.