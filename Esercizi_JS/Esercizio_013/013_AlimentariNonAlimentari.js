"use strict";

class Prodotto {
	#m_codiceBarre;
	#m_descrizione;
	#m_prezzo;
	constructor(codiceBarre, descrizione, prezzo) {
     this.codiceBarre = codiceBarre;
     this.descrizione = descrizione;
     this.prezzo = prezzo;
	}

                 set codice(nuovoCodice) {
                    this.#m_codiceBarre = nuovoCodice;
                }
                get codice() {
                    return this.#m_codiceBarre;
                }
                set descrizione(nuovaDescrizione) {
                    this.#m_descrizione = nuovaDescrizione;
                }
                get descrizione() {
                    return this.#m_descrizione;
                }
                set prezzo(nuovoPrezzo) {
                    this.#m_prezzo = nuovoPrezzo;
                }
                get prezzo() {
                    return this.#m_prezzo;
                }
	applicaSconto() {
		this.#m_prezzo = (this.#m_prezzo - (5/100*this.#m_prezzo));
		console.log(this.#m_prezzo);
	}

}

class Alimentari extends Prodotto {
    #m_dataScadenza;
	constructor(codiceBarre, descrizione, prezzo, dataScadenza) {
        super(codiceBarre, descrizione, prezzo);
     this.dataScadenza = dataScadenza;
	}
}
	
class NonAlimentari extends Prodotto{
	#m_materiale;
	constructor(codiceBarre, descrizione, prezzo, materiale) {
		super(codiceBarre, descrizione, prezzo);
     this.materiale = materiale;
	}

}


let prod = new Prodotto("fdf", "sdfdd", 348);
//console.log();
prod.prezzo = 100;
prod.applicaSconto(prod);
