# Ejercicio 5

5. Dada una cadena de paréntesis y corchetes escribe una función que regresa si la
cadena está bien balanceada, es decir, por cada paréntesis o corchete que abre hay uno
al mismo nivel que que cierra. Por ejemplo si recibe ‘([])’ tiene que regresar true y si
recibe ‘([)]’ tiene que regresar false.

## Resolución
- Para este problema al principio se me ocurrio una solución simple pero cuando estaba 
haciendo pruebas manuales, me di cuenta que había otra posibilidad y debido a eso 
hice dos funciones que pueden comprobar la cadena, esto por que las dos soluciones 
se me hicieron válidas y creo que cubren con la lógica o el sentido de la apertura 
y cierre de parentesis y corchetes, también agregue un pequeño filtro que quita los 
espacios de la cadena y cualquier otro caracter por cualquier error de dedo que se 
llegara a tener al momento de ingresar una cadena. 

1. La primer solución **stringCheckingSimple** que hice para este problema solamente se baso en:
- Comprobar que la longitud del arreglo sea par.
- Recorrer el arreglo desde cero hasta la mitad del arreglo y obtener los 
dos caracteres en el indice del iterador de izquierda a derecha y de izquierda a 
derecha para comprobar si son pareja.

2. La segunda función **stringCheckingComplete** que hice para este problema se baso en:
- Recorrer todo el arreglo original.
- En la primer iteración meter el primer elemento del arreglo original en un nuevo arreglo.
- Despues de la primera iteración, comprobar si el elemento actual es pareja del elemento anterior 
del nuevo arreglo, si es así, eliminar el elemento del nuevo arreglo, y si no es igual, agregarlo 
al nuevo arreglo.
- Al final del bucle solo queda comprobar si la longitud del nuevo arreglo es cero, entonces 
todo esta bien, de lo contrario hubo algun parentesis o corchete que no se cerro correctamente. 
