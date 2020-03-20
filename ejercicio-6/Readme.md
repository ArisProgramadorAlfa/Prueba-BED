# Ejercicio 6

6. Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que
acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a
14:00 no puede estar en el mismo salón que una de 12:00 a 15:00. Escribe una función
que encuentre ese número de salones, por ejemplo si tienes clases de 11:00 a 14:00,
12:00 a 15:00 y 14:30 a 16:00 el menor número de salones es 2.

## Resolución
- Este problema es algo complicado ya que es necesaria una matriz en donde se 
almacenará cada salón y cada salon almacenará los horarios que tiene ocupados. 
Esto para que cuando haya un nuevo horario, se pueda validar si aún tienen 
disponibilidad los salones existentes o se creara uno nuevo en la matriz.
Otro detalle son las validaciones para corroborar si un horario puede estar en 
un salon donde ya haya horarios ocupados.