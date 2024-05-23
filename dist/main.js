"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = require("./Impuestos.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestoCliente = new _Impuestos.Impuestos(10000, 2000);
var clientePrueba = new _Cliente["default"]('Diego', impuestoCliente);
console.log(impuestoCliente.montoBrutoAnual, impuestoCliente.deducciones);
console.log(clientePrueba.nombre, clientePrueba.impuesto.montoBrutoAnual, clientePrueba.impuesto.deducciones);
console.log(clientePrueba.calcularImpuesto());

/* let persona = new Cliente('Alvaro', 300);
console.log(persona.nombre, persona.impuesto); */