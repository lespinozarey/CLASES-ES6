export default class Cliente {
    #nombre
    constructor(nombre, impuesto){
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(data){
        return this.#nombre = data;
    }

    calcularImpuesto(){
        return (`El impuesto final a pagar es de: ${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21}`);
    }
}


