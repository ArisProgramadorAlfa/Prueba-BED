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