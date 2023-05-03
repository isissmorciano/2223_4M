/*
Un contadino ha una fattoria, all'interno della quale ha molti animali, 
in particolare vuole memorizzare i dati di: polli, cavalli, maiali e conigli. 
Ogni animale sta nel suo recinto, che ha determinate dimensioni. 
Di ogni animale vuole memorizzare la razza, il peso, il nome e il verso. 
Realizzare la progettazione UML della fattoria all'interno della quale va inserito 
anche il metodo Verso() il quale, attraverso una stringa di ritorno, 
mi dica quale verso fa un determinato animale. Fare anche l'implementazione in JS, ma solo delle classi.
*/

class Recinto {
    #m_lunghezza = null;
    #m_larghezza = null;
    #m_tipoAnimale = null;
    #m_animali = null;
    constructor(lunghezza,larghezza,tipoAnimale) {
        this.lunghezza = lunghezza;
        this.larghezza = larghezza;
        this.tipoAnimale = tipoAnimale;
        this.animali = [];
    }
    get lunghezza() {
        return this.m_lunghezza;
    }
    get larghezza() {
        return this.m_larghezza;
    }
    get tipoAnimale() {
        return this.m_tipoAnimale;
    }
    set lunghezza(nuovaLunghezza) {
        this.m_lunghezza = nuovaLunghezza;
    }
    set larghezza(nuovaLarghezza) {
        this.m_larghezza = nuovaLarghezza;
    }
    set tipoAnimale(nuovoTipoAnimale) {
        this.m_tipoAnimale = nuovoTipoAnimale;
    }
    aggiungiAnimale(animale) {
        this.animali.push(animale);
    }
    stampaRecinto() {
        let stampa = this.m_tipoAnimale + ":<br>";
        for(let animale of this.animali)
            stampa += animale.stampaAnimale() + "<br>";
        return stampa;
    }
}
class Animale {
    #m_razza = null;
    #m_peso = null;
    #m_nome = null;
    #m_verso = null;
    constructor(razza,peso,nome,verso) {
        this.razza = razza;
        this.peso = peso;
        this.nome = nome;
        this.verso = verso;
    }
    get razza() {
        return this.#m_razza;
    }
    get peso() {
        return this.#m_peso;
    }
    get nome() {
        return this.#m_nome;
    }
    get verso() {
        return this.#m_verso;
    }
    set razza(nuovaRazza) {
        this.#m_razza = nuovaRazza;
    }
    set peso(nuovoPeso) {
        this.#m_peso = nuovoPeso;
    }
    set nome(nuovoNome) {
        this.#m_nome = nuovoNome;
    }
    set verso(nuovoVerso) {
        this.#m_verso = nuovoVerso;
    }
    stampaAnimale() {
        return  "razza: " + this.#m_razza + ", peso: " + this.#m_peso + ", nome: " + this.#m_nome + ", verso: " + this.#m_verso;
    }
}
class Pollo extends Animale {
    constructor(razza,peso,nome){
        super(razza,peso,nome);
        this.verso = "chiocciare";
    }
}
class Cavallo extends Animale {
    constructor(razza,peso,nome){
        super(razza,peso,nome);
        this.verso = "nitrire";
    }
}
class Maiale extends Animale {
    constructor(razza,peso,nome){
        super(razza,peso,nome);
        this.verso = "grugnire";
    }
}
class Coniglio extends Animale {
    constructor(razza,peso,nome){
        super(razza,peso,nome);
        this.verso = "zigare";
    }
}

console.clear();
let recinto1 = new Recinto("10","15","polli");
let pollo1 = new Pollo("carmelo",1.5,"carmelito");
recinto1.aggiungiAnimale(pollo1);
let pollo2 = new Pollo("gengis",5.2,"kan");
recinto1.aggiungiAnimale(pollo2);
document.write(recinto1.stampaRecinto());

