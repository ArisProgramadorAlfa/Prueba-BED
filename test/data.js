const data = {
    ejercicio1 : [
        {
            message: 'Debe regresar un subarreglo donde el valor de cada elemento sea mayor al elemento anterior.',
            param: [3,2,5,9,1,3],
            result: [2,5,9]
        },
        {
            message: 'Debe regresar un subarreglo donde el valor de cada elemento sea mayor al elemento anterior, no se consideran los números negativos ni fracciones.',
            param: [1.2,3,-1,2,5,9,1,3, 1],
            result: [2,5,9]
        },
        {
            message: 'Debe regresar false si se envía un arreglo vacio.',
            param: [],
            result: false
        },{
            message: 'Debe regresar false si se envía un arreglo con números negativos o fracciones.',
            param: [-1,-2,-5, 1.5, 9.7],
            result: false
        },
    ],
    ejercicio4 : [
        {
            message: 'Dado un arreglo, debe devolver un arreglo ordenado sin números repetidos, sin considerar a los números negativos o fracciones.',
            param: [9,8,6,3,1,1,2],
            result: [1,2,3,6,8,9]
        },
        {
            message: 'Dado un arreglo, debe devolver un arreglo ordenado sin números repetidos., sin considerar a los números negativos o fracciones.',
            param: [0,1.1,-1,5,6,3,-2],
            result: [0,3,5,6]
        },
        {
            message: 'Debe devolver falso si el arreglo esta vacio.',
            param: [],
            result: false
        },
        {
            message: 'Debe devolver falso si el arreglo no contiene números enteros.',
            param: [1.1, 2.7],
            result: false
        }
    ],    
    ejercicio6 : [
        {
            message: 'Debe devolver la menor cantidad de salones que se necesitan para determinados horarios de clase.',
            param: [
                {
                  start: '11:00',
                  end:'14:00'
                },
                {
                  start: '12:00',
                  end:'15:00'
                },
                {
                  start: '14:00',
                  end:'16:00'
                },
                {
                  start: '14:00',
                  end:'16:00'
                },
              ],
            result: 3
        },
        {
            message: 'Debe devolver la menor cantidad de salones que se necesitan para determinados horarios de clase.',
            param: [
                {
                  start: '11:00',
                  end:'14:00'
                },
                {
                  start: '12:00',
                  end:'15:00'
                },
                {
                  start: '14:30',
                  end:'16:00'
                }
              ],
            result: 2
        },
        {
            message: 'Debe devolver falso si el arreglo no se ha podido validar la estructurade los datos.',
            param: [1],
            result: false
        }
    ]
};

module.exports = data;