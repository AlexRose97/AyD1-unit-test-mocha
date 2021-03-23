const assert = require("chai").assert;
const alex = require("../201602999");

// Results
describe("Funciones-201602999", function () {
  describe("volumenEsfera()", function () {
    it("1. Debe devolver el volumen de la esfera", function () {
      let volumen = alex.volumenEsfera(3);
      assert.isAbove(volumen, parseInt(36 * 3.14));
    });
  });

  describe("invertirCadena()", function () {
    it("2. Debe invertir una cadena", function () {
      let cadena = alex.invertirCadena("Alex");
      assert.isAbove(cadena, "xelA");
    });
  });

  describe("Maxpos()", function () {
    it("3. Debe obtener la posicion del numero mayor", function () {
      let posmax = alex.Maxpos([3, 4, 5, 8, 1, 9]);
      assert.isAbove(posmax, 5);
    });
  });

  describe("numeroPrimo()", function () {
    it("4. verificar si un numero es primo", function () {
      var numero = alex.numeroPrimo(11);
      assert.equal(numero, true);
    });
  });

  describe("numeroPar()", function () {
    it("5. verificar si un numero es par", function () {
      var numero = alex.numeroPar(11);
      assert.equal(numero, false);
    });
  });
});
