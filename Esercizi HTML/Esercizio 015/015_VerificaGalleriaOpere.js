/*
Sviluppare un’ applicazione per gestire una collezione

di opere d’arte identificata da un nome, da un
insieme

di opere d'arte e dalle informazioni relative al
loro ingombro.

Un’opera  d’arte
e caratterizzata dal titolo, nome dell’ artista e ingombro dell'opera.

Le opere d’arte sono di due tipologie:


·       
Quadro: l’ingombro è identificato da altezza e lunghezza.


·       
Scultura: l’ingombro è identificato da altezza larghezza e profondità


Realizzare poi, una classe collezione identificata da un nome e da

un insieme di opere d'arte e scrivere i seguenti
metodi:
       
inserire un' opera d'arte.
      
stampare la collezione.
     
stampare l'occupazione di una data opera.
      
Cercare l’opera d’arte con ingombro maggiore e quella con
ingombro minore.
*/
        class Collezione {
            #m_nome = null;
            #m_opere = [];
            constructor(nome) {
                this.nome = nome;
                this.opere = [];
            }
            get nome() {
                return this.#m_nome;
            }
            stampaCollezione() {
                let stampa = "";
                for(let opera of this.#m_opere){
                    stampa += "titolo: "+opera.titolo + "<br>";
                    stampa += "artista: "+opera.artista + "<br>";
                    stampa += "altezza: "+opera.altezza + "<br>";
                    stampa += "profondità: "+opera.profondita + "<br>";
                    stampa += "lunghezza: "+opera.lunghezza + "<br><br>";
                }
                return stampa;
            }
            set nome(nuovoNome) {
                this.#m_nome = nuovoNome;
            }
            inserisciOpera(opera) {
                this.#m_opere.push(opera);
            }
            cercaIngombroMax() {
                let ingombroMax = 0;
                let operaIngombroMax = 0;
                for(let opera of this.#m_opere) {
                    if(opera.stampaOccupazOpera() > ingombroMax) {
                        ingombroMax = opera.stampaOccupazOpera();
                        operaIngombroMax = opera
                    }
                }
                return operaIngombroMax;
            }
            cercaIngombroMin() {
                let ingombroMin = this.#m_opere[0].stampaOccupazOpera();
                let operaIngombroMin = 0;
                for(let opera of this.#m_opere) {
                    if(opera.stampaOccupazOpera() < ingombroMin) {
                        ingombroMin = opera.stampaOccupazOpera();
                        operaIngombroMin = opera
                    }
                }
                return operaIngombroMin;
            }
        }
        class Opera {
            #m_titolo = null;
            #m_artista = null;
            #m_altezza = null;
            #m_lunghezza = null;
            constructor(titolo,artista,altezza,lunghezza) {
                this.titolo = titolo;
                this.artista = artista;
                this.altezza = altezza;
                this.lunghezza = lunghezza;
            }
            get titolo() {
                return this.#m_titolo;
            }
            get artista() {
                return this.#m_artista;
            }
            get altezza() {
                return this.#m_altezza;
            }
            get lunghezza() {
                return this.#m_lunghezza;
            }

            set titolo(nuovoTitolo){
                this.#m_titolo = nuovoTitolo;
            }
            set artista(nuovoArtista){
                this.#m_artista = nuovoArtista;
            }
            set altezza(nuovaAltezza){
                if(nuovaAltezza > 0)
                    this.#m_altezza = nuovaAltezza;
                else
                    throw "altezza non valida";
            }
            set lunghezza(nuovaLunghezza){
                if(nuovaLunghezza > 0)
                    this.#m_lunghezza = nuovaLunghezza;
                else
                    throw "lunghezza non valida";
            }
            stampaOccupazOpera() {
                return this.#m_lunghezza * this.#m_altezza;
            }
        }
        class Quadro extends Opera {
            constructor(titolo,artista,altezza,lunghezza){
                super(titolo,artista,altezza,lunghezza);
                //ha già tutto
            }
        }
        class Scultura extends Opera {
            #m_profondita = null;
            constructor(titolo,artista,altezza,lunghezza,profondita){
                super(titolo,artista,altezza,lunghezza);
                this.profondita = profondita;
            }
            get profondita() {
                return this.#m_profondita;
            }
            set profondita(nuovaProfondita) {
                if(nuovaProfondita > 0)
                    this.#m_profondita = nuovaProfondita;
                else
                    throw "profondità non valida";
            }
            stampaOccupazOpera() {
                return super.stampaOccupazOpera() * this.#m_profondita;
            }
        }
    try{
        console.clear();
        let collezione1 = new Collezione("moderna");
        let quadro1 = new Quadro("La notte","Filippo Conte",100,50);
        let quadro2 = new Quadro("La Mattina","Filippo Conte",52,50);
        let scultura1 = new Scultura("La Sedia","Gennaro Conte",10,50,10.5);

        collezione1.inserisciOpera(quadro1);
        collezione1.inserisciOpera(quadro2);
        collezione1.inserisciOpera(scultura1);

        document.write(collezione1.stampaCollezione());

        console.log(quadro1.stampaOccupazOpera());
        console.log(scultura1.stampaOccupazOpera());

        document.write("ingombro max: " + collezione1.cercaIngombroMax().titolo + "<br>");
        document.write("ingombro min: " + collezione1.cercaIngombroMin().titolo + "<br>");
    }catch(err){
        console.log(err)
    }