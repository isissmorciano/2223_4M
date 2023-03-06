        "use strict";

//Creare una classe Televisione sapendo che lo stato di una televisione è caratterizzato dal fatto di essere accesa o spenta, dal volume (che è compreso tra 0 e 100), dal canale (che è compreso tra 1 e 10 inclusi) e dal fatto che sia in modalità silenzioso o meno.
//
//Creare un opportuno costruttore, e i seguenti metodi:
//PulasanteRosso(),
//CanaleSuccessivo(),
//CanalePrecedente(),
//AumentaVolume(),
//AbbassaVolume(),
//ImpostaCanale(int c),
//ToString(),
//PulsanteSilenzioso().
//Si rendano esplicite le scelte implementative fatte nei commenti all’inizio del codice.

// attributi di una classe televisore
// stato = [true, false] // non è un array sono i possibili valori della var
// canale = [1,2,..10]
// muto = [true, false]
// volume = [0,1,..100]


// se clicco i tasti canale e la televisione è spenta, la tv si accende e va sul canale selezionato dall'utente
// aggiungiamo un immagine per ogni canale, cambiando canale deve cambiare l'immagine


// definizione della classe
class Televisore {
    #m_stato = ""
    #m_canale = ""
    #m_muto = ""
    #m_volume = ""
    constructor(stato,canale,muto,volume){
        this.stato = stato;
        this.canale = canale;
        this.muto = muto;
        this.volume = volume;
    }
    toggleStato() {
        if (this.#m_stato == false) {
            this.#m_stato = true;
          console.log(this.#m_stato);
        }
        else {
            this.#m_stato = false;
          console.log(this.#m_stato);
        }
    }
    
    set Canale(InsCanale) {
    if (InsCanale < 1 || InsCanale > 10) {
        alert("Indefinito");
    }
    
    else if (this.#m_stato == true) {
      this.#m_canale = InsCanale;
    }
    
    }

    get Canale() {
        if (this.#m_stato == true) {
     document.write(this.#m_canale + "<br>");
 }
    }

    set Volume(InsVolume) {
     if(InsVolume > 1 && InsVolume < 100 && this.#m_stato == true) {
        this.#m_volume = InsVolume;
     }
    }

    get Volume() {
    if(this.#m_stato == true && this.#m_muto == false) 
     document.write(this.#m_volume); 
    else if(this.#m_muto == true)
        document.write("muto" + "<br>");
     
 
        }
    
    ToggleSilenzioso() {
            if (this.#m_muto == false) {
            this.#m_muto = true;
            console.log(this.#m_muto);
        }
        else {
            this.#m_muto = false;
         console.log(this.#m_muto);
        }
    
    }


}

// creazione di un oggetto della classe
let tv = new Televisore(false,3,false,50);

tv.toggleStato();
tv.toggleStato();
tv.toggleStato();
tv.ToggleSilenzioso();
tv.Volume; 
tv.ToggleSilenzioso();
tv.Volume; 
tv.Volume = 60;
tv.Volume; 
//tv.canale()