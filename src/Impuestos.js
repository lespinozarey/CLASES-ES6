export class Impuestos{
    #montoBrutoAnual
    #deducciones
    constructor(montoBrutoAnual, deducciones){
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;
    }
    get montoBrutoAnual(){
        return this.#montoBrutoAnual;
    }
    get deducciones(){
        return this.#deducciones;
    }
    set montoBrutoAnual(monto){
        this.#montoBrutoAnual = monto;
    }
    set deducciones(valor){
        this.#deducciones = valor;
    }
}