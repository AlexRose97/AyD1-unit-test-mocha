module.exports = {
  volumenEsfera: function (x) {
    var volumen = (4 / 3) * 3.14 * x * x * x;
    return parseFloat(volumen);
  },
  invertirCadena: function (cadena) {
    var cadAux = "\0";
    for (let index = 0; index < cadena.length; index++) {
      cadAux = cadena[index] + cadAux;
    }
    return cadAux;
  },
  Maxpos: function (list = []) {
    max = Math.max(...list);
    posMax = list.indexOf(max);
    return posMax + 1;
  },
  numeroPrimo: function (numero) {
    for (let index = 2; index < numero; index++) {
      if (numero % index == 0) {
        return false;
      }
    }
    return true;
  },
  numeroPar: function (numero) {
    if (numero % 2 == 0) {
      return true;
    }
    return false;
  },
};
