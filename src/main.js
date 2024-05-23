import Cliente from "./Cliente.js";
import { Impuestos } from "./Impuestos.js";

let impuestoCliente = new Impuestos(10000, 2000);
let clientePrueba = new Cliente('Diego', impuestoCliente)

console.log(impuestoCliente.montoBrutoAnual, impuestoCliente.deducciones)
console.log(clientePrueba.nombre, clientePrueba.impuesto.montoBrutoAnual, clientePrueba.impuesto.deducciones)
console.log(clientePrueba.calcularImpuesto())
