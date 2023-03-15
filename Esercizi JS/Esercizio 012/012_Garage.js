
        "use strict";


class Veicolo {
    #m_marca;
    #m_anno;
    #m_cilindrata;
    constructor(marca,anno,cilindrata){
        this.marca = marca;
        this.anno = anno;
        this.cilindrata = cilindrata;
    }

    get marca(){
    return this.#m_marca;
    }
    set marca(marca){
    this.#m_marca = marca;
    }
    get anno(){
    return this.#m_anno;
    }
    set anno(anno){
    this.#m_anno = anno;
    }
    get cilindrata(){
    return this.#m_cilindrata;
    }
    set cilindrata(cilindrata){
    this.#m_cilindrata = cilindrata;
    }
    ToString(){
    return `marca:${this.marca}; anno:${this.anno}; cilindrata:${this.cilindrata};`;
    }
}

class Auto extends Veicolo{
    #m_porte;
    #m_alimentazione;
    constructor(marca,anno,cilindrata,porte,alimentazione){
        super(marca,anno,cilindrata);
        this.porte = porte;
        this.alimentazione = alimentazione;
    }
    get porte(){
    return this.#m_porte;
    }
    set porte(porte){
    this.#m_porte = porte;
    }
    get alimentazione(){
    return this.#m_alimentazione;
    }
    set alimentazione(alimentazione){
    this.#m_alimentazione = alimentazione;
    }
    ToString(){
    return `${super.ToString()} porte:${this.porte}; alimentazione:${this.alimentazione};`;
    }
}

class Furgone extends Veicolo{
    #m_capacita;
    constructor(marca,anno,cilindrata,capacita){
        super(marca,anno,cilindrata);
        this.capacita = capacita;
    }
    get capacita(){
    return this.#m_capacita;
    }
    set capacita(capacita){
    this.#m_capacita = capacita;
    }
    ToString(){
    return `${super.ToString()} capacita:${this.capacita};`;
    }
}

class Moto extends Veicolo{
    #m_tempi;
    constructor(marca,anno,cilindrata,tempi){
        super(marca,anno,cilindrata);
        this.tempi = tempi;
    }
    get tempi(){
    return this.#m_tempi;
    }
    set tempi(tempi){
    this.#m_tempi = tempi;
    }
    ToString(){
    return `${super.ToString()} tempi:${this.tempi};`;
    }  
}


let furgone = new Furgone ("ferrari", 2022, 2500, 1950);
console.log(furgone.ToString());