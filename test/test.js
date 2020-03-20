const getSubArray = require('./../ejercicio-1/ejercicio1');
const sumaEnSerie = require('./../ejercicio-2/ejercicio2');
const getHigherNumber = require('./../ejercicio-3/ejercicio3');
const clearArray = require('./../ejercicio-4/ejercicio4');
const checkString = require('./../ejercicio-5/ejercicio5');
const findClassRoom = require('./../ejercicio-6/ejercicio6');
const data = require('./data');
let assert = require('assert');

describe('Examen BED', () => {  
  
  describe('Ejercicio 1.', () => {
    for (const test of data.ejercicio1) {
      it(test.message, () => {
        assert.deepEqual(getSubArray(test.param), test.result);
      });      
    }
  });

  describe('Ejercicio 2', () => {
    it('Debe regresar una suma en serie desde n hasta m.', () => {
        assert.equal(sumaEnSerie(5,9), 35);
    });
    it('Devuelve false si n o m no son números enteros positivos', () => {
        assert.equal(sumaEnSerie(-1, 4.5), false);
    });
    it('Devuelve false si n es mayor que m', () => {
        assert.equal(sumaEnSerie(10, 5), false);
    });
  });

  describe('Ejercicio 3', () => {
    it('Debe mostrar el k-esimo número mas grande de un arreglo dado.', () => {
        assert.equal(getHigherNumber([7,8,9,1,2,5,7,3], 2), 8);
    });
    it('Debe mostrar el k-esimo número mas grande de un arreglo dado.', () => {
      assert.equal(getHigherNumber([7,8,9,1,2,5,7,3], 6), 3);
    });
    it('Debe regresar false si k es cero', () => {
      assert.equal(getHigherNumber([7,8,9,1,2,5,7,3], 0), false);
    });
    it('Debe regresar false si k es mayor que la longitud del arreglo.', () => {
      assert.equal(getHigherNumber([7,8,9,1,2,5,7,3], 0), false);
    });
    it('Debe regresar false si el arreglo esta vacio.', () => {
      assert.equal(getHigherNumber([], 10), false);
    });
  });

  describe('Ejercicio 4', () => {
    for (const test of data.ejercicio4) {
      it(test.message, () => {
        assert.deepEqual(clearArray(test.param), test.result);
      });      
    }
  });

  describe('Ejercicio 5', () => {
    describe('Función simple', () => {
      it('Debe devolver true si la cadena de parentesis y corchetes esta bien balanceada', () => {
        assert.equal(checkString.stringCheckingSimple("([])"), true);
      });
      it('Debe devolver false si la cadena de parentesis y corchetes no esta bien balanceada', () => {
        assert.equal(checkString.stringCheckingSimple("([]())"), false);
      });
      it('Debe devolver false si la cadena de parentesis y corchetes no esta bien balanceada', () => {
        assert.equal(checkString.stringCheckingSimple("([)]"), false);
      });
    });
    describe('Función completa', () => {
      it('Debe devolver true si la cadena de parentesis y corchetes esta bien balanceada.', () => {
        assert.equal(checkString.stringCheckingComplete("([])"), true);
      });
      it('Debe devolver false si la cadena de parentesis y corchetes no esta bien balanceada', () => {
        assert.equal(checkString.stringCheckingComplete("([]([]))"), true);
      });
      it('Debe devolver false si la cadena de parentesis y corchetes no esta bien balanceada', () => {
        assert.equal(checkString.stringCheckingComplete("([(]))"), false);
      });
    });
  });

  describe('Ejercicio 6', ()=>{
    for (const test of data.ejercicio6) {
      it(test.message, () => {
        assert.deepEqual(findClassRoom(test.param), test.result);
      });      
    }
  });
  
});